import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync(new URL('../../docs/student/e8-program-final.js', import.meta.url), 'utf8');
const loaderSource = fs.readFileSync(new URL('../../docs/student/sync.js', import.meta.url), 'utf8');

assert.match(loaderSource, /\?v=e8-qa-(?:20261024-issue44|20261025-(?:issue52|backlog)|20261026-issue64)-v1/u, 'Loader musi pobrać wersję z poprawką pytania o wielokrotność');

const match = source.match(/q\('Która liczba jest wielokrotnością 12\?', \[(.*?)\], (\d),/u);
assert.ok(match, 'Brakuje pytania o wielokrotność 12');

const options = [...match[1].matchAll(/'(\d+)'/gu)].map(([, value]) => Number(value));
const correctIndex = Number(match[2]);
const multiples = options.filter(value => value % 12 === 0);

assert.deepEqual(multiples, [72], 'Pytanie musi mieć dokładnie jedną odpowiedź będącą wielokrotnością 12');
assert.equal(options[correctIndex], 72, 'Wskazana poprawna odpowiedź musi być jedyną wielokrotnością 12');

console.log('OK issue #44: pytanie ma jedną poprawną wielokrotność 12 — 72');
