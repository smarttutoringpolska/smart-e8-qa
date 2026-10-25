import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const read = name => fs.readFileSync(new URL(`../../docs/student/${name}`, import.meta.url), 'utf8');
const context = vm.createContext({window:{}, console});
for(const file of ['e8-learning-engine.js','e8-data.js','e8-more-data.js','e8-textbook-data.js','e8-curriculum.js','e8-program-final.js','e8-self-work.js']) vm.runInContext(read(file),context);
const app=read('app.js');
const fn=name=>app.slice(app.indexOf(`function ${name}(`),app.indexOf('\nfunction ',app.indexOf(`function ${name}(`)));
const specs=context.window.SMART_E8.specs;
context.tasks={};context.courses=[];context.examSets={};context.saved={scoreGoal:70};
for(const [id,spec] of Object.entries(specs)){
  const course={id,title:spec.title,taskIds:[]};
  for(const path of spec.paths){
    const taskId=path.id;
    course.taskIds.push(taskId);
    context.tasks[taskId]={course:id,exam:!!path.exam,steps:path.rows.map(row=>({q:row[0],options:row[1],correct:row[2],conclusion:row[4]}))};
  }
  context.courses.push(course);
  context.examSets[id]={variants:[{taskIds:course.taskIds}]};
}
context.courseById=id=>context.courses.find(course=>course.id===id);
context.lessonSteps=task=>task.steps;
vm.runInContext(fn('selfWorkTasks')+'\n'+fn('buildFullExamSuite')+'\n'+fn('examSolutionSteps'),context);
const suite=vm.runInContext('buildFullExamSuite()',context);
for(const variant of suite.variants){
  assert.equal(variant.taskIds.length,20);
  const open=variant.taskIds.slice(15).map(id=>context.tasks[id]);
  assert.equal(new Set(open.map(task=>task.problem)).size,5);
  for(const task of open){
    assert.ok(task.problem.length>15 && /\d|[¼½¾⅓⅔³²]/u.test(task.problem),task.problem);
    assert.equal(task.steps.length,3);
    assert.equal(task.openScoringCriteria.length,3);
    assert.deepEqual(Array.from(context.examSolutionSteps(task)),Array.from(task.openSolutionSteps));
    assert.ok(task.openSolutionSteps.every(line=>line.length>8));
  }
}
vm.runInContext(read('diagnostic.js'),context);
for(const [goal,count] of [[30,24],[50,28],[70,36],[90,40]]){
  const questions=context.diagnosticQuestionsForGoal(goal);
  assert.equal(questions.length,count);
  assert.equal(new Set(questions.map(item=>item.id.replace(/-x\d+$/,''))).size,count);
  assert.equal(new Set(questions.map(context.diagnosticQuestionKey)).size,count);
  const legacy=context.legacyDiagnosticQuestionsForGoal(goal);
  assert.deepEqual(questions.map(q=>q.course),legacy.map(q=>q.course));
}
let persisted=0;context.persist=()=>persisted++;
vm.runInContext('diagnosticState.started=true; diagnosticState.goal=90; refreshDiagnosticQuestions(90); diagnosticState.current=7; saveDiagnosticProgress(); diagnosticQuestions=[]; diagnosticState.restored=false; restoreDiagnostic();',context);
assert.equal(vm.runInContext('diagnosticState.current',context),7);
assert.equal(vm.runInContext('diagnosticQuestions.length',context),40);
assert.equal(persisted,1);
let handler,scheduled,scrolled=false,stopped=false;
context.$$=()=>[{dataset:{textbookSection:'tb-example'},addEventListener:(_,fn)=>handler=fn}];
context.root={querySelector:selector=>{assert.equal(selector,'#tb-example');return {scrollIntoView:()=>scrolled=true};}};
context.requestAnimationFrame=fn=>scheduled=fn;
vm.runInContext(fn('bindTextbookLessonFlow')+'\nbindTextbookLessonFlow(root)',context);
handler({preventDefault(){},stopPropagation(){stopped=true;}});
assert.ok(stopped);assert.equal(scrolled,false);scheduled();assert.ok(scrolled);
console.log('OK backlog: 15 concrete open tasks, unique diagnoses 24/28/36/40, snapshot resume, deferred anchor');
