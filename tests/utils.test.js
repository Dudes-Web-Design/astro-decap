import { describe, it, expect } from 'vitest';
import { formatDate, getCurrentYear } from '../src/js/utils.js';

describe('utils', () => {
  it('formats date to "MMM D, YYYY"', () => {
    expect(formatDate('2020-01-02')).toBe('Jan 2, 2020');
  });

  it('returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getCurrentYear()).toBe(year);
  });
});
