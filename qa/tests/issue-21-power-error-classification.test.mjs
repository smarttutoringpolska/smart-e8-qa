import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');

const taskTextStart = source.indexOf('function taskText(t,step){');
const competencyStart = source.indexOf('function ckeCompetency(t,step){', taskTextStart);
const insightStart = source.indexOf('function errorInsight(t,step){', competencyStart);
const profilesStart = source.indexOf('const ckeMethodProfiles=', insightStart);

assert.ok(taskTextStart >= 0 && competencyStart > taskTextStart, 'Nie znaleziono funkcji taskText');
assert.ok(insightStart >= 0 && profilesStart > insightStart, 'Nie znaleziono funkcji errorInsight');

const helperSource =
  source.slice(taskTextStart, competencyStart) +
  source.slice(insightStart, profilesStart);

const context = {};
vm.runInNewContext(helperSource, context);

const powerInsight = context.errorInsight(
  {
    topic: 'Prawa działań na potęgach',
    title: 'Trening',
    problem: 'Rozpoznaj podstawę i działanie na wykładnikach.',
  },
  {
    q: 'Uprość 2³·2⁵.',
    hints: ['Podstawa jest taka sama, więc dodaj wykładniki.'],
  },
);

assert.equal(powerInsight.code, 'POWER_RULES');
assert.equal(powerInsight.label, 'Prawa działań na potęgach');
assert.match(powerInsight.tip, /tej samej podstawie dodaj wykładniki/u);

const baseOnlyInsight = context.errorInsight(
  { topic: 'Liczby', title: 'Ćwiczenie', problem: '' },
  { q: 'Podstawa jest taka sama.', hints: [] },
);
assert.notEqual(
  baseOnlyInsight.code,
  'SUBSTITUTE',
  'Rzeczownik „podstawa” nie może być klasyfikowany jako podstawianie',
);

const substitutionInsight = context.errorInsight(
  { topic: 'Funkcje', title: 'Wartość funkcji', problem: '' },
  { q: 'Oblicz f(3), podstawiając 3 za x.', hints: [] },
);
assert.equal(substitutionInsight.code, 'SUBSTITUTE');
assert.equal(substitutionInsight.label, 'Podstawianie');

console.log('OK issue #21: podstawa potęgi i podstawianie mają osobne klasyfikacje');
