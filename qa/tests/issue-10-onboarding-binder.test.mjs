import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const helperSource = source.match(/function bindTextbookLessonFlow\(root\)\{[\s\S]*?\n\}/u)?.[0];

assert.ok(helperSource, 'Nie znaleziono funkcji bindTextbookLessonFlow');

let querySelectorCalls = 0;
const root = {
  querySelector() {
    querySelectorCalls += 1;
    return null;
  },
};

assert.doesNotThrow(
  () => vm.runInNewContext(`${helperSource}\nbindTextbookLessonFlow(root)`, {
    root,
    $$: () => [],
  }),
  'Brak odnośników Podręcznika nie może przerwać wiązania pozostałych kontrolek',
);

assert.equal(querySelectorCalls, 0, 'Bez odnośników nie należy szukać sekcji docelowej');
assert.match(
  helperSource,
  /\$\$\('\[data-textbook-section\]'\s*,\s*root\)\.forEach/u,
  'Binder powinien pobierać kolekcję odnośników',
);

console.log('OK issue #10: ekran bez odnośników Podręcznika nie blokuje onboardingu');
