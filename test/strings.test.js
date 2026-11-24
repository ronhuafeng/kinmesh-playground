import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, truncate } from '../src/strings.js';

test('slugify joins words with hyphens', () => {
  assert.equal(slugify('  Hello, World! '), 'hello-world');
  assert.equal(slugify('任务 关联 PR'), '任务-关联-pr');
});

test('truncate respects the maximum including the ellipsis', () => {
  assert.equal(truncate('hello', 5), 'hello');
  assert.equal(truncate('hello', 3), 'he…');
  assert.equal(truncate('hello', 1), '…');
  assert.equal(truncate('hello', 0), '');
  assert.equal(truncate('', 0), '');
});

test('truncate keeps grapheme clusters intact', () => {
  assert.equal(truncate('😀abc', 3), '😀a…');
  assert.equal(truncate('👨‍👩‍👧‍👦abc', 2), '👨‍👩‍👧‍👦…');
  assert.equal(truncate('e\u0301ab', 2), 'e\u0301…');
});
