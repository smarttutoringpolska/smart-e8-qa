import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../../docs/student/app.js', import.meta.url), 'utf8');
const loaderSource = fs.readFileSync(new URL('../../docs/student/sync.js', import.meta.url), 'utf8');

assert.match(loaderSource, /\?v=e8-qa-20261024-issue(?:26|30|31)-v1/u, 'Loader musi pobrać poprawioną wersję app.js');

const helperStart = source.indexOf('function restoreReviewCourse(');
const helperEnd = source.indexOf('\nfunction routeTo(', helperStart);
assert.ok(helperStart >= 0 && helperEnd > helperStart, 'Brakuje helpera odtwarzającego kontekst Powtórek');

const context = {
  courses: [{ id: 'e8-numbers' }, { id: 'e8-geometry' }],
  saved: { reviewCourse: 'e8-geometry' },
  state: { activeCourse: 'e8-numbers' },
};
vm.runInNewContext(source.slice(helperStart, helperEnd), context);

assert.equal(context.restoreReviewCourse(), true);
assert.equal(context.state.activeCourse, 'e8-geometry', 'Reload #review ma przywrócić zapisany kurs');

context.saved.reviewCourse = 'nie-istnieje';
context.state.activeCourse = 'e8-numbers';
assert.equal(context.restoreReviewCourse(), false);
assert.equal(context.state.activeCourse, 'e8-numbers', 'Nieprawidłowy zapis nie może zmienić kursu');

assert.match(
  source,
  /route==='review'\)\{saved\.reviewCourse=state\.activeCourse;restoreReviewCourse\(state\.activeCourse\);persist\(\);\}/u,
  'Wejście do Powtórek musi zapisać aktywny kurs',
);
assert.match(source, /r==='review'\)restoreReviewCourse\(\)/u, 'Hashchange #review musi odtworzyć kurs');
assert.match(source, /initial\[0\]==='review'\)restoreReviewCourse\(\)/u, 'Bezpośredni reload #review musi odtworzyć kurs');

console.log('OK issue #26: Powtórki zachowują aktywny kurs po odświeżeniu');
