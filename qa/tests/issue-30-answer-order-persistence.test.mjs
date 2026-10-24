import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const loaderSource = fs.readFileSync(new URL('../../docs/student/sync.js', import.meta.url), 'utf8');

assert.match(loaderSource, /\?v=e8-qa-20261024-issue30-v1/u, 'Loader musi pobrać wersję zachowującą kolejność odpowiedzi');

const helperStart = source.indexOf('function shuffledOptions(');
const helperEnd = source.indexOf('\nfunction taskText(', helperStart);
assert.ok(helperStart >= 0 && helperEnd > helperStart, 'Brakuje helpera shuffledOptions');

let persisted = null;
const context = {
  state: { optionOrder: null },
  saveTaskProgress() { persisted = context.state.optionOrder.slice(); },
  Math: Object.create(Math),
};
context.Math.random = () => 0.75;
vm.runInNewContext(source.slice(helperStart, helperEnd), context);

const step = { options: ['A1', 'B1', 'C1', 'D1'] };
const firstOrder = Array.from(context.shuffledOptions(step));
assert.deepEqual(persisted, firstOrder, 'Pierwsze wylosowanie musi zostać zapisane przed odświeżeniem');

context.state.optionOrder = persisted.slice();
context.Math.random = () => 0.1;
const restoredOrder = Array.from(context.shuffledOptions(step));
assert.deepEqual(restoredOrder, firstOrder, 'Odtworzona permutacja nie może być losowana ponownie');
assert.deepEqual(persisted, firstOrder, 'Odczyt zapisanej permutacji nie może jej nadpisać');

assert.match(
  source,
  /optionOrder:state\.optionOrder\?\.slice\(\)\|\|null/u,
  'Aktywna seria musi przechowywać optionOrder',
);
assert.match(
  source,
  /state\.optionOrder=Array\.isArray\(order\).*?order\.slice\(\):null/su,
  'Wznowienie musi odtwarzać zwalidowaną optionOrder',
);

console.log('OK issue #30: kolejność odpowiedzi jest zapisana przy pierwszym renderze i zachowana po odświeżeniu');
