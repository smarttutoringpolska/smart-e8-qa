import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const helperSource = source.match(/function bindTextbookLessonFlow\(root\)\{[\s\S]*?\n\}/u)?.[0];

assert.ok(helperSource, 'Nie znaleziono funkcji bindTextbookLessonFlow');

let clickHandler;
let prevented = false;
let selector = '';
let scrollOptions;
const link = {
  dataset: { textbookSection: 'tb-formulas' },
  addEventListener(type, handler) {
    assert.equal(type, 'click');
    clickHandler = handler;
  },
};
const target = {
  scrollIntoView(options) {
    scrollOptions = options;
  },
};
const root = {
  querySelector(value) {
    selector = value;
    return target;
  },
};
const context = { root, $$: () => [link], requestAnimationFrame: callback => callback() };

vm.runInNewContext(`${helperSource}\nbindTextbookLessonFlow(root)`, context);
assert.equal(typeof clickHandler, 'function', 'Odnośnik planu lekcji powinien otrzymać obsługę kliknięcia');

clickHandler({ preventDefault() { prevented = true; }, stopPropagation() {} });

assert.equal(prevented, true, 'Domyślna zmiana hasha musi być zablokowana');
assert.equal(selector, '#tb-formulas', 'Należy znaleźć sekcję banku wzorów w bieżącym widoku');
assert.deepEqual({...scrollOptions}, { behavior: 'smooth', block: 'start' }, 'Sekcja powinna zostać płynnie przewinięta');

console.log('OK issue #2: odnośnik przewija Podręcznik bez uruchamiania routera');
