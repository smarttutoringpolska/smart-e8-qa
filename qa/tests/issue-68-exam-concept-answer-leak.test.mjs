import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/issue-68-exam-concept-fix.js', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('../../docs/student/sync.js', import.meta.url), 'utf8');

const task = {
  course: 'e8-numbers',
  examGroup: 'Liczby i działania',
  concept: {
    label: 'KOLEJNOŚĆ DZIAŁAŃ',
    formula: '18 − 3 · 4 = 6',
    items: ['wynik: 6'],
  },
};
const context = {
  state: {route: 'exam', examSubmitted: false},
  courseById: () => ({id: 'e8-numbers'}),
  courseColor: () => '#1677e8',
  examConceptBoard: () => '<div>18 − 3 · 4 = 6 · wynik: 6</div>',
};

vm.runInNewContext(source, context);
const result = vm.runInNewContext('examConceptBoard(task)', {...context, task});

assert.match(result, /data-exam-neutral-visual/u, 'Przed oddaniem ma być widoczna neutralna plansza egzaminacyjna');
assert.match(result, /Wzór i rozwiązanie pojawią się po oddaniu arkusza/u, 'Plansza ma jasno wyjaśniać blokadę rozwiązania');
assert.doesNotMatch(result, /18 − 3 · 4|wynik:\s*6/u, 'Plansza nie może ujawniać działania ani wyniku z wizualizacji tematycznej');
assert.doesNotMatch(result, /<div>18/u, 'Pierwotny renderer mapy wzorów nie może być wywołany przed oddaniem arkusza');

context.state.examSubmitted = true;
assert.match(vm.runInNewContext('examConceptBoard(task)', {...context, task}), /18 − 3 · 4 = 6/u, 'Po oddaniu arkusza pierwotna wizualizacja ma nadal być dostępna');
assert.equal(loader.match(/"issue-68-exam-concept-fix\.js"/gu)?.length, 2, 'Poprawka ma być ładowana w trybie QA i konta');

console.log('OK issue #68: Próba E8 nie ujawnia mapy wzorów ani wyniku przed oddaniem');
