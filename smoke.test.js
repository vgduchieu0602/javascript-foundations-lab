import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const projects=['greeting-builder','temperature-converter','tip-calculator','counter','number-guessing','character-counter','palindrome-checker','todo-list','color-changer','bmi-calculator','password-generator','quiz-app','digital-clock','json-formatter','api-explorer'];
for(const slug of projects){test(`${slug} starter files exist`,()=>{assert.ok(existsSync(`projects/${slug}/index.html`));const code=readFileSync(`projects/${slug}/app.js`,'utf8');assert.match(code,/addEventListener/);});}
