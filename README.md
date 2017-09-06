# 1. Javascript Testing - Basics

## Summary
- [Tutorial](https://www.youtube.com/watch?v=pnQVrUePcu8&feature=youtu.be)
- Run newModulesing mocha `mocha --require babel-register`  

## Testing Dependencies
- Test runner: Mocha
- Expectation library: Chai

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
import {expect} from 'chai';
import newModule from '../src/newModule.js';

describe('task name', () => {
  it('should return data', () => {
    expect(newModule('expected value')).to.equal('expected value');
  });
});

```
