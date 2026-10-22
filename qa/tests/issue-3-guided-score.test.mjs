import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const guidedScoreSource = source.match(/function guidedScore\([^\n]+/u)?.[0];
const recordOutcomeSource = source.match(/function recordOutcome\([^\n]+/u)?.[0];

assert.ok(guidedScoreSource, 'Nie znaleziono funkcji guidedScore');
assert.ok(recordOutcomeSource, 'Nie znaleziono funkcji recordOutcome');

const context = {
  state: { mistakes: 3, skippedSteps: [4], hintUsed: true },
  saved: {
    mastery: {},
    wrong: [{ id: 'fractions', step: 4 }],
    completed: [],
    errorProfile: {},
  },
  window: {
    E8_LEARNING_ENGINE: {
      scheduleReview(previous, correct) {
        return { lastResult: correct ? 'correct' : 'wrong', streak: correct ? 1 : 0, due: '2026-10-23T00:00:00.000Z' };
      },
    },
  },
  addDays: () => '2026-10-23T00:00:00.000Z',
  persist: () => {},
};

vm.runInNewContext(`${guidedScoreSource}\n${recordOutcomeSource}`, context);
vm.runInNewContext("recordOutcome('fractions', 'guided', false, true)", context);

assert.equal(context.saved.mastery.fractions.lastScore, 76, 'Seria z odłożonym pytaniem ma zachować obliczony wynik');
assert.equal(context.saved.mastery.fractions.best, 76, 'Najlepszy wynik nie może zostać wyzerowany');
assert.equal(context.saved.mastery.fractions.lastResult, 'wrong', 'Odłożone pytanie nadal ma kierować serię do powtórki');
assert.equal(context.saved.wrong.length, 1, 'Odłożone pytanie musi pozostać w kolejce Powtórek');

console.log('OK issue #3: wynik 76% zapisany, status powtórki zachowany');
