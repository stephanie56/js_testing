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
  it('should not be a string', () => {
    expect(returnData(10)).to.not.be.a('string');
  });
  it('should deep equal to a given object', () => {
    const givenObj = {
      name: "Stephanie",
      id: 1234521
    }
    expect(returnData(givenObj)).to.deep.equal(givenObj);
  });
  it('should contain part of the string', () => {
    expect('hello world').to.contain('hello');
  });
});
