import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const loaderSource = fs.readFileSync(new URL('../../docs/student/sync.js', import.meta.url), 'utf8');

assert.match(loaderSource, /\?v=e8-qa-(?:20261024-issue(?:31|44)|20261025-issue52)-v1/u, 'Loader musi pobrać wersję z poprawką podsumowania danych');

const helperStart = source.indexOf('function taskText(');
const helperEnd = source.indexOf('\nconst ckeMethodProfiles=', helperStart);
assert.ok(helperStart >= 0 && helperEnd > helperStart, 'Brakuje funkcji klasyfikującej pomyłki');

const context = {};
vm.runInNewContext(source.slice(helperStart, helperEnd), context);
const insight = context.errorInsight(
  { topic: 'Porównywanie danych', title: 'Większe i mniejsze wartości' },
  { q: 'Wykres zaczyna oś pionową od 90 zamiast od 0. Co trzeba zrobić?', hints: [] },
);
assert.equal(insight.code, 'REPRESENTATION', 'Pomyłka przy odczycie osi wykresu musi mieć kategorię reprezentacji');

const successStart = source.indexOf('function successCard(');
const successEnd = source.indexOf('\nfunction valueTable(', successStart);
const successSource = source.slice(successStart, successEnd);
assert.match(successSource, /repeatText=deferred\?.*:'Brak odłożonych pytań'/su, 'Brak kolejki powtórek musi mieć jednoznaczny komunikat');
assert.match(successSource, /<span>POWTÓRZYĆ<\/span><strong>\$\{deferred\}<\/strong>/u, 'Licznik powtórek musi pokazywać wyłącznie odłożone pytania');
assert.doesNotMatch(successSource, /deferred\|\|state\.mistakes/u, 'Poprawiona druga próba nie może udawać odłożonego pytania');

console.log('OK issue #31: odczyt wykresu ma właściwą kategorię, a podsumowanie liczy tylko odłożone pytania');
