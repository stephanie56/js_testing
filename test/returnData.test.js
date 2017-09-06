import {expect} from 'chai';
import returnData from '../src/returnData.js';


describe('returnData tests', () => {
  it('should return undefined if no parameter passed', () => {
    expect(returnData()).to.be.undefined;
  });
  it('should return a string when a string is passed', () => {
    expect(returnData('some string')).to.be.a('string');
  });
  it('should return a number when a number is passed', () => {
    expect(returnData(10)).to.be.a('Number');
  });
});
