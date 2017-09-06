import assert from 'assert';
import isCoolNumber from '../src/isCoolNumber.js';

describe('test isCoolNumber', () => {
  it('returns true', () => {
    assert.equal(isCoolNumber(42), true, 'isCoolNumber(42) is true');
  });
});
