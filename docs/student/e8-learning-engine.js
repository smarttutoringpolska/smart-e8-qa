(function(){
  const REVIEW_INTERVALS=[1,3,7,14,30];
  const COURSE_ORDER=['e8-numbers','e8-fractions','e8-percent-plus','e8-powers-plus','e8-algebra','e8-equations-plus','e8-proportion','e8-geometry','e8-circle-plus','e8-space','e8-data','e8-reasoning'];
  const FOUNDATIONS=new Set(['e8-numbers','e8-fractions','e8-percent-plus','e8-algebra','e8-equations-plus','e8-proportion']);
  const HIGH_SCORE_TOPICS=new Set(['e8-powers-plus','e8-geometry','e8-circle-plus','e8-space','e8-data','e8-reasoning']);
  const DIAGNOSTIC_PROFILES={
    30:{base:2,extras:0,steps:[1,3],minutes:'20–25',level:'Fundamenty i najczęstsze schematy'},
    50:{base:2,extras:4,steps:[3,5],minutes:'25–30',level:'Podstawy oraz zadania standardowe'},
    70:{base:3,extras:0,steps:[4,6,8],minutes:'30–35',level:'Pełny przekrój i zadania wieloetapowe'},
    90:{base:3,extras:4,steps:[9,8,9],minutes:'35–45',level:'Trudniejsze pułapki i rozumowanie egzaminacyjne'}
  };

  function diagnosticProfile(goal=70){return DIAGNOSTIC_PROFILES[Number(goal)]||DIAGNOSTIC_PROFILES[70];}

  function isoAfterDays(days,now=Date.now()){
    const date=new Date(now);date.setDate(date.getDate()+Number(days||0));return date.toISOString();
  }

  function scheduleReview(previous={},correct,now=Date.now()){
    const previousStreak=Math.max(0,Number(previous.streak)||0);
    const streak=correct?Math.min(previousStreak+1,REVIEW_INTERVALS.length):0;
    const reviewStage=correct?Math.max(0,streak-1):0;
    const intervalDays=REVIEW_INTERVALS[reviewStage];
    return {streak,reviewStage,intervalDays,due:isoAfterDays(intervalDays,now),lastResult:correct?'correct':'wrong'};
  }

  function formatDue(due,now=Date.now()){
    const time=new Date(due).getTime();
    if(!Number.isFinite(time))return 'termin do ustalenia';
    const days=Math.ceil((time-now)/86400000);
    if(days<=0)return 'dzisiaj';
    if(days===1)return 'jutro';
    return `za ${days} dni`;
  }

  function diagnosticPriority(group,{goal=70,mastery={},errorProfile={}}={}){
    const course=group.course,percent=Number(group.percent)||0,wrong=(group.wrongTaskIds||[]).length,advanced=Number(group.advancedMisses)||0;
    const courseMastery=Array.isArray(group.masteryScores)?group.masteryScores:Object.values(mastery||{}).map(entry=>Number(entry?.best)||0);
    const masteryAverage=Number.isFinite(Number(group.masteryAverage))?Number(group.masteryAverage):(courseMastery.length?courseMastery.reduce((sum,value)=>sum+value,0)/courseMastery.length:percent);
    const recurringErrors=Number(group.errorCount)||Object.values(errorProfile||{}).reduce((sum,profile)=>sum+(profile?.taskIds||[]).some(id=>(group.wrongTaskIds||[]).includes(id))?(Number(profile?.count)||1):0,0);
    const foundationBoost=FOUNDATIONS.has(course)?Math.max(0,72-goal)*.2+7:0;
    const ambitionBoost=goal>=70&&HIGH_SCORE_TOPICS.has(course)?8:0;
    const priority=(100-percent)*.7+Math.max(0,goal-percent)*.28+wrong*11+advanced*(goal>=90?13:7)+(100-masteryAverage)*.12+recurringErrors*5+foundationBoost+ambitionBoost;
    let reason='Utrwalenie potrzebne przed przejściem do kolejnego działu.';
    if(recurringErrors)reason=`Ten sam typ błędu wrócił ${recurringErrors===1?'ponownie':`${recurringErrors} razy`}.`;
    else if(wrong)reason=`${wrong} ${wrong===1?'zadanie diagnostyczne wymaga':'zadania diagnostyczne wymagają'} poprawy.`;
    else if(percent<goal)reason=`Wynik ${percent}% jest poniżej wybranego celu ${goal}%.`;
    else if(advanced)reason='Trudniejsze zadania ujawniły lukę do domknięcia.';
    return {priority,reason,order:COURSE_ORDER.indexOf(course)};
  }

  function rankDiagnosticGroups(groups,options={}){
    return (groups||[]).map(group=>({...group,...diagnosticPriority(group,options)})).sort((a,b)=>b.priority-a.priority||(a.order<0?99:a.order)-(b.order<0?99:b.order));
  }

  function simulatePersona(goal,groups,options={}){
    const profile=diagnosticProfile(goal),ranked=rankDiagnosticGroups(groups,{...options,goal:Number(goal)});
    return {goal:Number(goal),questionCount:COURSE_ORDER.length*profile.base+profile.extras,profile,plan:ranked.slice(0,7)};
  }

  function makeWrongItem(base={},previous=null,now=Date.now()){
    const attempts=(Number(previous?.attempts)||0)+1;
    return {...previous,...base,attempts,createdAt:previous?.createdAt||new Date(now).toISOString(),lastWrongAt:new Date(now).toISOString(),due:isoAfterDays(1,now),reviewStage:0};
  }

  window.E8_LEARNING_ENGINE={REVIEW_INTERVALS,COURSE_ORDER,DIAGNOSTIC_PROFILES,diagnosticProfile,simulatePersona,scheduleReview,formatDue,rankDiagnosticGroups,makeWrongItem};
})();
