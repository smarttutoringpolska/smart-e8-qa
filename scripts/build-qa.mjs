import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const source = process.argv[2];
if (!source || !fs.existsSync(path.join(source, 'public/student/index.html'))) throw new Error('Pass the Smart E8 source checkout.');
const root = path.resolve(import.meta.dirname, '..');
const target = path.join(root, 'docs/student');
fs.mkdirSync(target, { recursive: true });
const files = fs.readdirSync(path.join(source, 'public/student')).filter(name => !name.startsWith('admin.') && name !== 'test-reports.js');
const hashes = {};
for (const name of files) {
  const data = fs.readFileSync(path.join(source, 'public/student', name));
  hashes[name] = crypto.createHash('sha256').update(data).digest('hex');
  fs.writeFileSync(path.join(target, name), data);
}
const index = path.join(target, 'index.html');
fs.writeFileSync(index, fs.readFileSync(index, 'utf8').replace('<script src="./config.js"></script>', '<script src="../qa-profile.js"></script>\n  <script src="./config.js"></script>').replace('  <script src="./test-reports.js"></script>', ''));
fs.writeFileSync(path.join(target, 'config.js'), 'window.SMART_MATURA_CONFIG = { testReportsEnabled: false, supabaseUrl: "", supabaseAnonKey: "" };\n');
fs.writeFileSync(path.join(root, 'docs/.nojekyll'), '');
fs.writeFileSync(path.join(root, 'docs/robots.txt'), 'User-agent: *\nDisallow: /\n');
fs.writeFileSync(path.join(root, 'docs/qa-version.json'), JSON.stringify({ schemaVersion: 1, sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim(), exportedAt: new Date().toISOString(), mode: 'static-local-qa', exclusions: ['ChatGPT access gate', 'server API', 'student accounts', 'cloud sync', 'owner quality dashboard'], adaptations: ['profile bootstrap', 'local-only config', 'GitHub issue reporting instead of server reports'], originalFiles: hashes }, null, 2) + '\n');
console.log(`Prepared ${files.length} student assets in docs/student.`);
