import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/issue-64-daily-concept-fix.js', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('../../docs/student/sync.js', import.meta.url), 'utf8');
const entry = fs.readFileSync(new URL('../../docs/student/index.html', import.meta.url), 'utf8');
const session = {current: 0, answers: []};
const context = vm.createContext({
  state: {route: 'session', examSubmitted: false},
  activeDailySession: () => session,
  examConceptBoard: () => 'neutral-data-only',
  geometryTrainingBoard: () => 'revealed-formula-and-result',
  contextProblem: (task, contextName) => contextName === 'daily' ? `Jedno zadanie z działu „${task.topic}”.` : task.problem,
  taskVisual: () => 'original-visual',
  visualNote: () => 'original-note',
});

vm.runInContext(source, context);

const task = {
  exam: true,
  visual: 'concept',
  topic: 'Miniarkusz',
  problem: 'Średnia liczb 4, 6 i 8 wynosi…',
};
context.task = task;

assert.equal(
  vm.runInContext('contextProblem(task, "daily")', context),
  task.problem,
  'Sesja ma pokazywać konkretną treść zadania egzaminacyjnego',
);
assert.equal(
  vm.runInContext('taskVisual(task)', context),
  'neutral-data-only',
  'Przed odpowiedzią wizualizacja nie może zawierać wzoru ani wyniku',
);
assert.match(
  vm.runInContext('visualNote(task)', context),
  /dopiero po Twojej odpowiedzi/u,
  'Opis ma jasno zapowiadać odsłonięcie rozwiązania po odpowiedzi',
);

session.answers[0] = {correct: true};
assert.equal(
  vm.runInContext('taskVisual(task)', context),
  'revealed-formula-and-result',
  'Po odpowiedzi pełne wyjaśnienie powinno zostać odsłonięte',
);
assert.equal(
  loader.match(/"issue-64-daily-concept-fix\.js"/gu)?.length,
  2,
  'Poprawka ma być ładowana zarówno w trybie lokalnym QA, jak i w ścieżce konta',
);
assert.match(loader, /e8-qa-20261026-issue(?:64|68)-v1/u, 'Loader ma omijać poprzednią wersję cache');
assert.match(entry, /sync\.js\?v=e8-qa-20261026-issue(?:64|68)-v1/u, 'Strona ma pobierać nową wersję loadera');

console.log('OK issue #64: konkretna treść i brak wyniku przed odpowiedzią; rozwiązanie po odpowiedzi');
