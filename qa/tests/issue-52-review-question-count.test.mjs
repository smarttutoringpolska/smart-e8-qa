import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const loaderSource = fs.readFileSync(new URL('../../docs/student/sync.js', import.meta.url), 'utf8');

assert.match(loaderSource, /\?v=e8-qa-(?:20261025-(?:issue52|backlog)|20261026-issue64)-v1/u, 'Loader musi pobrać wersję z poprawką licznika Powtórek');

const reviewStart = source.indexOf('function adaptiveReviewPage(');
const reviewEnd = source.indexOf('\nfunction openTopic(', reviewStart);
assert.ok(reviewStart >= 0 && reviewEnd > reviewStart, 'Brakuje widoku adaptacyjnych Powtórek');

const reviewSource = source.slice(reviewStart, reviewEnd);
assert.match(reviewSource, /deferredTotal=deferred\.length/u, 'Licznik pytań musi korzystać z aktualnej listy odłożonych pytań');
assert.match(reviewSource, /<h1>\$\{deferredTotal\?/u, 'Nagłówek musi zależeć od liczby odłożonych pytań');
assert.match(reviewSource, /Brak odłożonych pytań/u, 'Pusta kolejka pytań musi mieć jednoznaczny komunikat');
assert.match(reviewSource, /<span class="soft-chip">\$\{deferredTotal\}/u, 'Badge musi pokazywać liczbę odłożonych pytań');
assert.doesNotMatch(reviewSource, /<span class="soft-chip">\$\{total\} w kolejce/u, 'Badge nie może doliczać całych serii do kolejki pytań');

console.log('OK issue #52: nagłówek i badge liczą wyłącznie odłożone pytania');
