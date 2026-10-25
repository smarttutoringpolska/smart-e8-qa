const DIAGNOSTIC_VERSION=2;
let diagnosticQuestions=[];

const diagnosticState={started:false,current:0,answers:{},result:null,restored:false,goal:null};

function diagnosticProfile(goal=Number(saved.scoreGoal)||70){
  return window.E8_LEARNING_ENGINE?.diagnosticProfile(goal)||{base:3,extras:0,steps:[4,6,8],minutes:'30–35',level:'Pełny przekrój i zadania wieloetapowe'};
}

function diagnosticDifficulty(stepIndex){return stepIndex>=8?'Zaawansowane':stepIndex>=5?'Standard+':'Podstawy';}
function diagnosticWeight(label){return label==='Zaawansowane'?1.5:label==='Standard+'?1.25:1;}

function diagnosticQuestionFromTask(course,taskId,stepIndex,suffix=''){
  const task=tasks[taskId],steps=task?lessonSteps(task):[],index=Math.max(0,Math.min(stepIndex,steps.length-1)),step=steps[index];
  if(!step)return null;
  const difficulty=diagnosticDifficulty(index);
  return {
    id:`diag-${taskId}-${index}${suffix}`,
    course:course.id,
    taskId,
    difficulty,
    weight:diagnosticWeight(difficulty),
    q:step.q,
    options:[...step.options],
    correct:step.correct,
    why:step.conclusion||(step.hints||[]).filter(Boolean).join(' ')||'Wróć do wzoru i sprawdź każdy etap obliczeń.'
  };
}

function legacyDiagnosticQuestionsForGoal(goal=Number(saved.scoreGoal)||70){
  const profile=diagnosticProfile(goal),selected=[];
  courses.forEach(course=>{
    const ids=course.taskIds.filter(id=>tasks[id]&&!tasks[id].exam);
    if(!ids.length)return;
    for(let slot=0;slot<profile.base;slot++){
      const taskIndex=Number(goal)>=90?[ids.length-1,Math.max(0,ids.length-2),0][slot]:profile.base===1?0:Math.round(slot*(ids.length-1)/(profile.base-1));
      const question=diagnosticQuestionFromTask(course,ids[taskIndex],profile.steps[slot]??profile.steps.at(-1));
      if(question)selected.push(question);
    }
  });
  if(profile.extras){
    const extraCourses=Number(goal)>=90?[0,3,6,9]:[1,4,7,10];
    extraCourses.slice(0,profile.extras).forEach((courseIndex,extraIndex)=>{
      const course=courses[courseIndex%courses.length],ids=course.taskIds.filter(id=>tasks[id]&&!tasks[id].exam),taskId=ids[Math.max(0,ids.length-2-extraIndex%2)]||ids.at(-1);
      const question=diagnosticQuestionFromTask(course,taskId,9,`-x${extraIndex+1}`);
      if(question)selected.push(question);
    });
  }
  return selected;
}

function diagnosticQuestionKey(question){
  const text=question.q.toLowerCase().normalize('NFKC').replace(/<[^>]*>/g,'').replace(/[\s.,:;…?]/g,'');
  return text.includes('zdarzenianiemożliwego')||text.includes('zdarzenieniemożliwe')?'probability-impossible':text;
}
function diagnosticQuestionsForGoal(goal=Number(saved.scoreGoal)||70){
  const usedIds=new Set(),usedPrompts=new Set();
  return legacyDiagnosticQuestionsForGoal(goal).map(preferred=>{
    const course=courses.find(item=>item.id===preferred.course);
    const candidates=[preferred,...course.taskIds.filter(id=>tasks[id]&&!tasks[id].exam).flatMap(id=>lessonSteps(tasks[id]).map((_,index)=>diagnosticQuestionFromTask(course,id,index))).sort((a,b)=>Number(b.difficulty===preferred.difficulty)-Number(a.difficulty===preferred.difficulty))];
    const question=candidates.find(item=>item&&!usedIds.has(`${item.taskId}|${item.id.replace(/-x\d+$/,'')}`)&&!usedPrompts.has(diagnosticQuestionKey(item)));
    if(!question)throw new Error(`Brak unikalnego pytania diagnozy: ${preferred.course}`);
    usedIds.add(`${question.taskId}|${question.id.replace(/-x\d+$/,'')}`);usedPrompts.add(diagnosticQuestionKey(question));
    return question;
  });
}

function refreshDiagnosticQuestions(goal=diagnosticState.goal||Number(saved.scoreGoal)||70){diagnosticState.goal=Number(goal);diagnosticQuestions=diagnosticQuestionsForGoal(goal);return diagnosticQuestions;}
function diagnosticResultQuestions(result){return Array.isArray(result?.questions)&&result.questions.length?result.questions:diagnosticQuestionsForGoal(result?.goal||saved.scoreGoal);}

function restoreDiagnostic(){
  if(diagnosticState.restored)return;
  const active=saved.activeDiagnostic;
  if(active?.version===DIAGNOSTIC_VERSION){
    diagnosticState.started=true;
    diagnosticState.goal=Number(active.goal)||Number(saved.scoreGoal)||70;
    diagnosticQuestions=Array.isArray(active.questions)&&active.questions.length?active.questions:legacyDiagnosticQuestionsForGoal(diagnosticState.goal);
    diagnosticState.current=Math.min(Number(active.current)||0,diagnosticQuestions.length-1);
    diagnosticState.answers=active.answers||{};
  }
  diagnosticState.result=saved.diagnostic?.version===DIAGNOSTIC_VERSION?saved.diagnostic:null;
  if(!diagnosticQuestions.length)refreshDiagnosticQuestions(saved.scoreGoal);
  diagnosticState.restored=true;
}

function saveDiagnosticProgress(){
  saved.activeDiagnostic=diagnosticState.started?{version:DIAGNOSTIC_VERSION,goal:diagnosticState.goal,current:diagnosticState.current,answers:diagnosticState.answers,questions:diagnosticQuestions.map(item=>({...item,options:[...item.options]}))}:null;
  persist();
}
function diagnosticAnswered(){return Object.keys(diagnosticState.answers).filter(id=>diagnosticQuestions.some(item=>item.id===id)).length;}
function diagnosticStatus(percent){return percent>=75?'strong':percent>=50?'medium':'weak';}
function diagnosticStatusLabel(percent){return percent>=75?'Mocna strona':percent>=50?'Do utrwalenia':'Zacznij tutaj';}

function calculateDiagnostic(){
  const grouped={};
  courses.forEach(course=>grouped[course.id]={course:course.id,correct:0,total:0,scoreWeight:0,totalWeight:0,percent:0,advancedMisses:0,wrongTaskIds:[]});
  diagnosticQuestions.forEach(item=>{
    const group=grouped[item.course];if(!group)return;
    const correct=diagnosticState.answers[item.id]===item.correct;
    group.total++;group.totalWeight+=item.weight||1;
    if(correct){group.correct++;group.scoreWeight+=item.weight||1;}
    else{if(item.difficulty==='Zaawansowane')group.advancedMisses++;if(item.taskId&&!group.wrongTaskIds.includes(item.taskId))group.wrongTaskIds.push(item.taskId);}
  });
  Object.values(grouped).forEach(group=>group.percent=group.totalWeight?Math.round(group.scoreWeight/group.totalWeight*100):0);
  const score=diagnosticQuestions.filter(item=>diagnosticState.answers[item.id]===item.correct).length,totalWeight=diagnosticQuestions.reduce((sum,item)=>sum+(item.weight||1),0),scoreWeight=diagnosticQuestions.reduce((sum,item)=>sum+(diagnosticState.answers[item.id]===item.correct?(item.weight||1):0),0),result={version:DIAGNOSTIC_VERSION,goal:diagnosticState.goal,date:new Date().toISOString(),score,total:diagnosticQuestions.length,percent:Math.round(scoreWeight/totalWeight*100),groups:Object.values(grouped),answers:{...diagnosticState.answers},questions:diagnosticQuestions.map(item=>({...item,options:[...item.options]}))};
  saved.diagnostic=result;saved.activeDiagnostic=null;diagnosticState.result=result;diagnosticState.started=false;
  const plan=diagnosticPlan(result);
  saved.studyPlan={sourceDate:result.date,createdAt:new Date().toISOString(),taskIds:plan.map(item=>item.taskId),entries:plan.map(item=>({taskId:item.taskId,courseId:item.course.id,reason:item.reason,percent:item.percent,priority:item.priority})),selectedDay:1};
  saved.dailySession=null;persist();playFeedbackTone(result.percent>=60?'correct':'wrong');return result;
}

function diagnosticPlan(result){
  const goal=Number(result.goal)||Number(saved.scoreGoal)||70,used=new Set(),groups=result.groups.map(group=>{const course=courseById(group.course),ids=course.taskIds.filter(id=>tasks[id]&&!tasks[id].exam),scores=ids.map(id=>Number(saved.mastery[id]?.best)||0),errorCount=Object.values(saved.errorProfile||{}).reduce((sum,profile)=>sum+(profile?.taskIds||[]).filter(id=>ids.includes(id)).length,0);return{...group,masteryAverage:scores.length?scores.reduce((sum,value)=>sum+value,0)/scores.length:group.percent,errorCount};});
  const ranked=window.E8_LEARNING_ENGINE?.rankDiagnosticGroups(groups,{goal,mastery:saved.mastery,errorProfile:saved.errorProfile})||groups.sort((a,b)=>(100-b.percent)-(100-a.percent));
  return ranked.slice(0,7).map((group,index)=>{
    const course=courseById(group.course),fallback=course.taskIds.filter(id=>tasks[id]&&!tasks[id].exam).sort((a,b)=>(saved.mastery[a]?.best||0)-(saved.mastery[b]?.best||0)||(saved.mastery[a]?.attempts||0)-(saved.mastery[b]?.attempts||0)),candidates=[...(group.wrongTaskIds||[]),...fallback],taskId=candidates.find(id=>!used.has(id))||candidates[0]||course.taskIds[0];
    used.add(taskId);return{day:index+1,course,taskId,percent:group.percent,priority:group.priority||0,reason:group.reason||`Wynik ${group.percent}% wskazuje ten temat jako kolejny krok.`};
  });
}

function goalPlanMeta(){return{30:{title:'Pewne podstawy',tempo:'4 krótkie sesje tygodniowo',note:'Najpierw schematy dające najwięcej punktów.'},50:{title:'Bezpieczne 50%',tempo:'5 sesji tygodniowo',note:'Fundamenty oraz najczęstsze typy zadań CKE.'},70:{title:'Solidny wynik',tempo:'5–6 sesji tygodniowo',note:'Pełny zakres podstawowy z regularnymi checkpointami.'},90:{title:'Wynik bardzo wysoki',tempo:'6 sesji tygodniowo',note:'Pełny zakres, trudniejsze pułapki i wysoka dokładność.'}}[Number(saved.scoreGoal)||70];}
function studyPlanProgress(result){
  const generated=diagnosticPlan(result),stored=saved.studyPlan?.sourceDate===result.date?saved.studyPlan:null;
  const plan=generated.map((fallback,index)=>{
    const entry=stored?.entries?.[index]||null;
    const savedId=entry?.taskId||stored?.taskIds?.[index];
    const taskId=savedId&&tasks[savedId]?savedId:fallback.taskId;
    const course=courseById(tasks[taskId]?.course||entry?.courseId||fallback.course.id);
    const group=result.groups.find(item=>item.course===course.id);
    const percent=entry?.percent??group?.percent??fallback.percent;
    const reason=entry?.reason||`Wynik ${percent}% wskazuje ten temat jako kolejny krok.`;
    const record=saved.mastery[taskId]||{};
    const done=Boolean(record.last&&new Date(record.last)>=new Date(result.date)&&(record.best||0)>=80);
    return{...fallback,day:index+1,taskId,course,percent,reason,priority:entry?.priority??fallback.priority,done};
  });
  const currentIndex=plan.findIndex(item=>!item.done),completed=plan.filter(item=>item.done).length;
  return{plan,currentIndex,completed,current:currentIndex===-1?null:plan[currentIndex],complete:currentIndex===-1};
}

function diagnosticIntro(){
  const meta=goalPlanMeta(),profile=diagnosticProfile(saved.scoreGoal),count=courses.length*profile.base+profile.extras;
  return `<div class="page diagnostic-page"><section class="diagnostic-intro card"><div class="diagnostic-symbol">E8</div><div><span>TWÓJ PLAN DO EGZAMINU</span><h1>Najpierw wybierz cel, potem dokładnie sprawdź punkt startowy</h1><p>Poziom i długość diagnozy zmieniają się razem z oczekiwanym wynikiem. Pytania obejmują wszystkie ${courses.length} działów, a błędne odpowiedzi ustawiają kolejność pierwszych siedmiu sesji.</p><div class="diagnostic-goal-picker" role="group" aria-label="Wybierz cel egzaminacyjny"><small>MÓJ CEL</small>${[30,50,70,90].map(goal=>`<button type="button" data-score-goal="${goal}" class="${goal===saved.scoreGoal?'active':''}" aria-pressed="${goal===saved.scoreGoal}"><b>${goal}%</b><span>${goal===30?'Podstawy':goal===50?'Pewny wynik':goal===70?'Solidny wynik':'Ambitny cel'}</span></button>`).join('')}</div><div class="diagnostic-goal-note"><b>${meta.title}</b><span>${profile.level} · ${meta.note}</span></div><div class="diagnostic-facts"><i>${count} ${questionWord(count)}</i><i>około ${profile.minutes} min</i><i>${courses.length} działów</i><i>7 konkretnych sesji</i></div><button class="primary-btn" id="startDiagnostic">Rozpocznij diagnozę ${icon('arrow')}</button></div></section></div>`;
}

function diagnosticQuestionPage(){
  const item=diagnosticQuestions[diagnosticState.current],course=courseById(item.course),selected=diagnosticState.answers[item.id],answered=diagnosticAnswered(),last=diagnosticState.current===diagnosticQuestions.length-1,complete=answered===diagnosticQuestions.length;
  return `<div class="page diagnostic-page" style="--diagnostic:${courseColor(course)}"><div class="diagnostic-toolbar card"><div><span>TEST DIAGNOSTYCZNY · CEL ${diagnosticState.goal}%</span><strong>Pytanie ${diagnosticState.current+1} z ${diagnosticQuestions.length}</strong></div><div class="diagnostic-progress"><div class="progress-track"><div class="progress-fill" style="width:${Math.round(answered/diagnosticQuestions.length*100)}%"></div></div><b>${answered}/${diagnosticQuestions.length} odpowiedzi</b></div></div><nav class="diagnostic-dots card" aria-label="Pytania diagnostyczne">${diagnosticQuestions.map((question,index)=>`<button class="${index===diagnosticState.current?'active':''} ${Object.prototype.hasOwnProperty.call(diagnosticState.answers,question.id)?'answered':''}" data-diagnostic-nav="${index}" aria-label="Pytanie ${index+1}">${index+1}</button>`).join('')}</nav><article class="diagnostic-question card"><div class="diagnostic-course accent-${course.accent}"><span>${course.n}</span><div><small>KURS · ${item.difficulty.toUpperCase()}</small><b>${course.title}</b></div></div><h1>${item.q}</h1><div class="diagnostic-options">${item.options.map((option,index)=>`<button class="${selected===index?'selected':''}" data-diagnostic-answer="${index}"><i>${'ABCD'[index]}</i><span>${option}</span></button>`).join('')}</div><div class="diagnostic-note">Nie pokazujemy jeszcze poprawnej odpowiedzi. Zaznacz ją i przejdź dalej, kiedy będziesz gotowy.</div></article><footer class="diagnostic-controls card"><button class="secondary-btn" id="diagnosticPrev" ${diagnosticState.current===0?'disabled':''}>← Poprzednie</button><span>${selected===undefined?'Zaznacz jedną odpowiedź A–D':'Odpowiedź zapisana'}</span>${last?`<button class="primary-btn" id="finishDiagnostic" ${complete?'':'disabled'}>Wyślij odpowiedzi ${icon('check')}</button>`:`<button class="primary-btn" id="diagnosticNext" ${selected===undefined?'disabled':''}>Zapisz i przejdź dalej ${icon('arrow')}</button>`}</footer></div>`;
}

function diagnosticSkillMap(result){
  return `<section class="diagnostic-section skill-map-first"><div class="section-head"><div><span>OBRAZ CAŁOŚCI</span><h2>Mapa umiejętności</h2></div><span>Od najsłabszych obszarów zaczyna się Twój plan</span></div><div class="skill-map">${result.groups.map(group=>{const course=courseById(group.course),groupStatus=diagnosticStatus(group.percent);return `<article class="skill-map-card card ${groupStatus} accent-${course.accent}"><div><span>${course.n}</span><small>${diagnosticStatusLabel(group.percent)}</small></div><h3>${course.title}</h3><div class="progress-track" aria-label="${group.percent}%"><div class="progress-fill" style="width:${group.percent}%"></div></div><b>${group.correct}/${group.total}<small>${group.percent}%</small></b></article>`;}).join('')}</div></section>`;
}

function diagnosticAnswerReview(result){
  const questions=diagnosticResultQuestions(result),ordered=[...questions].sort((a,b)=>Number(result.answers?.[a.id]===a.correct)-Number(result.answers?.[b.id]===b.correct)),wrongCount=ordered.filter(item=>result.answers?.[item.id]!==item.correct).length;
  if(!wrongCount)return `<section class="diagnostic-review card all-correct"><div>${icon('check')}</div><h2>Wszystkie odpowiedzi poprawne</h2><p>Nie ma błędów do omówienia. Przejdź do planu utrwalającego.</p></section>`;
  return `<section class="diagnostic-section diagnostic-review-section"><div class="section-head"><div><span>SPRAWDŹ ODPOWIEDZI</span><h2>Co było dobrze, a co wymaga poprawy?</h2></div><span>${wrongCount} ${wrongCount===1?'błędna odpowiedź':'błędnych odpowiedzi'} · wyjaśnienia w karcie</span></div><details class="diagnostic-review-disclosure card"><summary><span>Otwórz kartę odpowiedzi</span><small>Do poprawy: ${wrongCount} · Poprawne: ${ordered.length-wrongCount}</small></summary><div class="diagnostic-review-list">${ordered.map((item,index)=>{const course=courseById(item.course),picked=result.answers?.[item.id],correct=picked===item.correct;return `<details class="card accent-${course.accent} ${correct?'review-correct':'review-wrong'}" ${!correct&&index===0?'open':''}><summary><i>${correct?'✓':'!'}</i><span><small>${course.title} · ${item.difficulty}</small><b>${item.q}</b></span><em>${correct?'Dobrze':'Zobacz wyjaśnienie'} ↓</em></summary><div><p>Twoja odpowiedź: <${correct?'strong':'s'}>${picked===undefined?'brak':'ABCD'[picked]+'. '+item.options[picked]}</${correct?'strong':'s'}></p><p>Poprawna odpowiedź: <strong>${'ABCD'[item.correct]}. ${item.options[item.correct]}</strong></p><div><b>${correct?'Dlaczego?':'Dlaczego ten wybór jest błędny?'}</b><span>${!correct&&Number.isInteger(picked)?wrongChoiceFeedback(item,picked):item.why}</span></div></div></details>`;}).join('')}</div></details></section>`;
}

function diagnosticResultPage(){
  const result=diagnosticState.result||saved.diagnostic,status=studyPlanProgress(result),meta=goalPlanMeta(),current=status.current,planTotal=status.plan.length;
  return `<div class="page diagnostic-page diagnostic-result"><header class="diagnostic-result-head card"><div class="diagnostic-score ${diagnosticStatus(result.percent)}"><strong>${result.percent}%</strong><span><b>${result.score}/${result.total}</b><small>dobrze</small></span></div><div class="diagnostic-result-copy"><span>DIAGNOZA DO CELU ${result.goal||saved.scoreGoal}%</span><h1>${status.complete?'Pierwszy tydzień ukończony':result.percent>=75?'Masz solidną bazę — plan utrwali wynik':'Wiemy już, od czego zacząć'}</h1><p>${status.complete?'Przejdź do codziennych sesji i kolejnych checkpointów.':`Pierwszy krok planu to <b>${current.course.title}</b>. Zacznij od teorii lub serii, a później przejrzyj mapę umiejętności i odpowiedzi.`}</p></div><button class="secondary-btn" id="restartDiagnostic">Powtórz diagnozę</button></header><section class="plan-command card"><div class="plan-command-progress"><span>PLAN ${planTotal} SESJI</span><strong>${status.completed}/${planTotal}</strong><div class="progress-track"><div class="progress-fill" style="width:${Math.round(status.completed/planTotal*100)}%"></div></div></div><div class="plan-command-copy"><small>${meta.title.toUpperCase()} · ${meta.tempo.toUpperCase()}</small><h2>${status.complete?'Plan startowy wykonany':`Teraz: dzień ${status.currentIndex+1} · ${current.course.title}`}</h2><p>${status.complete?'Wyniki są zapisane. Panel będzie dalej dobierał sesje na podstawie błędów i terminów powtórek.':`${tasks[current.taskId].title}. ${current.reason} Przeczytaj teorię w Podręczniku, a potem rozwiąż serię 10 przykładów A–D.`}</p></div>${status.complete?`<button class="primary-btn" data-route="session">Otwórz sesję dnia ${icon('arrow')}</button>`:`<div class="plan-command-actions"><button class="secondary-btn" data-plan-theory="${current.taskId}">Przeczytaj teorię</button><button class="primary-btn" data-plan-task="${current.taskId}" data-plan-day="${current.day}">Rozpocznij 10 przykładów ${icon('arrow')}</button></div>`}</section>${diagnosticSkillMap(result)}${diagnosticAnswerReview(result)}<section class="diagnostic-section"><div class="section-head"><h2>Plan krok po kroku</h2><span>Kolejność uwzględnia cel, błędy, poziom opanowania i wymagane fundamenty</span></div><div class="week-plan active-week-plan card">${status.plan.map((item,index)=>`<button data-plan-task="${item.taskId}" data-plan-day="${item.day}" class="week-plan-row ${item.done?'done':index===status.currentIndex?'current':'upcoming'} accent-${item.course.accent}"><i>${item.done?'✓':item.day}</i><div><small>${item.done?'OPANOWANE':index===status.currentIndex?'DZISIAJ':`DZIEŃ ${item.day}`}</small><b>${item.course.title}</b><span>${tasks[item.taskId].title} · ${item.reason}</span></div><em>${item.done?'Gotowe':index===status.currentIndex?'Aktualny krok':'Otwórz'}</em>${icon('arrow')}</button>`).join('')}</div></section></div>`;
}

function diagnosticPage(){restoreDiagnostic();if(diagnosticState.result&&!diagnosticState.started)return diagnosticResultPage();return diagnosticState.started?diagnosticQuestionPage():diagnosticIntro();}

function diagnosticDashboardCard(){
  if(saved.diagnostic?.version===DIAGNOSTIC_VERSION){const status=studyPlanProgress(saved.diagnostic),next=status.current;return `<section class="dashboard-diagnostic card completed"><div><span>${icon('target')} PLAN DO CELU ${saved.diagnostic.goal||saved.scoreGoal}%</span><h2>${status.complete?'Plan startowy wykonany':`Następny krok: ${next.course.title}`}</h2><p>${status.complete?'Otwórz sesję dnia — panel będzie dalej dobierał naukę automatycznie.':`${status.completed}/7 sesji ukończonych · ${tasks[next.taskId].title}`}</p></div><button class="primary-btn" data-route="diagnostic">${status.complete?'Zobacz podsumowanie':'Otwórz plan'} ${icon('arrow')}</button></section>`;}
  const profile=diagnosticProfile(saved.scoreGoal),count=courses.length*profile.base+profile.extras;
  return `<section class="dashboard-diagnostic card"><div><span>${icon('target')} ZACZNIJ TUTAJ</span><h2>Nie zgaduj, czego się uczyć</h2><p>Wybierz cel, rozwiąż ${count} ${questionWord(count)} ze wszystkich działów i otrzymaj pierwsze siedem sesji.</p></div><button class="primary-btn" data-route="diagnostic">Ułóż mój plan ${icon('arrow')}</button></section>`;
}

function bindDiagnostic(){
  $$('[data-plan-task]').forEach(button=>button.addEventListener('click',()=>{const taskId=button.dataset.planTask,task=tasks[taskId];if(!task)return;saved.studyPlan=saved.studyPlan||{};saved.studyPlan.selectedDay=Number(button.dataset.planDay)||1;persist();routeTo('learn',taskId);}));
  $$('[data-plan-theory]').forEach(button=>button.addEventListener('click',()=>{const task=tasks[button.dataset.planTheory];if(task)routeTo('knowledge',task.course||courses[0].id);}));
  $('#startDiagnostic')?.addEventListener('click',()=>{diagnosticState.started=true;diagnosticState.goal=Number(saved.scoreGoal)||70;refreshDiagnosticQuestions(diagnosticState.goal);diagnosticState.current=0;diagnosticState.answers={};diagnosticState.result=null;diagnosticState.restored=true;saved.diagnostic=null;playFeedbackTone('submit');saveDiagnosticProgress();render();});
  $$('[data-diagnostic-answer]').forEach(button=>button.addEventListener('click',()=>{const item=diagnosticQuestions[diagnosticState.current];diagnosticState.answers[item.id]=Number(button.dataset.diagnosticAnswer);playFeedbackTone('select');saveDiagnosticProgress();renderWithoutScrollJump();}));
  $$('[data-diagnostic-nav]').forEach(button=>button.addEventListener('click',()=>{diagnosticState.current=Number(button.dataset.diagnosticNav);saveDiagnosticProgress();render();}));
  $('#diagnosticPrev')?.addEventListener('click',()=>{diagnosticState.current=Math.max(0,diagnosticState.current-1);saveDiagnosticProgress();render();});
  $('#diagnosticNext')?.addEventListener('click',()=>{playFeedbackTone('submit');diagnosticState.current=Math.min(diagnosticQuestions.length-1,diagnosticState.current+1);saveDiagnosticProgress();render();});
  $('#finishDiagnostic')?.addEventListener('click',()=>{if(diagnosticAnswered()!==diagnosticQuestions.length)return;calculateDiagnostic();render();window.scrollTo({top:0,behavior:'smooth'});});
  $('#restartDiagnostic')?.addEventListener('click',()=>{diagnosticState.started=false;diagnosticState.current=0;diagnosticState.answers={};diagnosticState.result=null;diagnosticState.restored=true;diagnosticState.goal=null;saved.diagnostic=null;saved.activeDiagnostic=null;saved.studyPlan=null;saved.dailySession=null;persist();render();});
}
