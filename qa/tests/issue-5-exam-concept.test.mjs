import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const helperSource = source.match(/function examConceptForRow\([^\n]+/u)?.[0];

assert.ok(helperSource, 'Nie znaleziono funkcji examConceptForRow');

const context = {};
vm.runInNewContext(helperSource, context);

const generic = {
  label: 'RÓWNANIE',
  formula: 'x + 3 = 8 ⇒ x = 5',
  items: ['wykonuj tę samą operację po obu stronach'],
};
const row = [
  'Suma liczby i liczby o 8 większej wynosi 34. Mniejsza liczba to…',
  ['10', '13', '17', '21'],
  1,
  'Zapisz x+(x+8)=34.',
  '2x=26, więc x=13.',
  'Wiek, ceny i liczby',
  '1 pkt',
];

const result = vm.runInNewContext('examConceptForRow(generic, row)', {...context, generic, row});

assert.equal(result.formula, row[3], 'Wizualizacja ma używać podpowiedzi bieżącego zadania');
assert.deepEqual([...result.items], [row[4]], 'Wniosek wizualizacji ma pochodzić z tego samego zadania');
assert.equal(result.label, row[5], 'Etykieta ma wskazywać właściwy temat');
assert.notEqual(result.formula, generic.formula, 'Ogólny przykład działu nie może zastępować danych zadania');

console.log('OK issue #5: treść wizualizacji pochodzi z tego samego rekordu co pytanie');
