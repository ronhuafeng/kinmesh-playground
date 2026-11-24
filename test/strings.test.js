import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/strings.js';

test('slugify joins words with hyphens', () => {
  assert.equal(slugify('  Hello, World! '), 'hello-world');
  assert.equal(slugify('任务 关联 PR'), '任务-关联-pr');
});
