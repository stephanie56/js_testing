# 2. Test with Node

## Summary
- [Tutorial](https://nodeschool.io/#workshoppers)

## Testing Dependencies
- Test runner: Mocha
- Assert from node

## ES6 Dependencies
- babel-register
- babel-preset-env

## Source code sample
```javascript
function newModule(data) {
  return data;
}
export default newModule;
```

## Testing code sample
```javascript
import assert from 'assert';
import newModule from '../src/newModule.js';

describe('task name', () => {
  it('should return data', () => {
    assert.equal(newModule(42), 42, 'newModule(42) returns  42');
  });
});
```

## Assert functions
- `assert.ok(value, message) // tests if value is truthy`
- `assert.equal(actual, expected, message) // ==`
- `assert.notEqual(actual, expected, message) // !=`
- `assert.deepEqual(actual, expected, message) // for comparing objects`
- `assert.notDeepEqual(actual, expected, message)`
- `assert.strictEqual(actual, expected, message) // ===`
- `assert.notStrictEqual(actual, expected, message) // !==`
