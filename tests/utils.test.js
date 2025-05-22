import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatDate, getCurrentYear } from '../src/js/utils.js';

test('formats date to "MMM D, YYYY"', () => {
  assert.strictEqual(formatDate('2020-01-02'), 'Jan 2, 2020');
});

test('returns the current year', () => {
  const year = new Date().getFullYear();
  assert.strictEqual(getCurrentYear(), year);
});
