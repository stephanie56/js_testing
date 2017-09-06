import {expect} from 'chai';
import reverseString from '../src/reverseString.js';

describe('test reverseString', () => {
  it('should return a string', () => {
    expect(reverseString('hello')).to.be.a('string');
  });
  it('should become "olleh"', () => {
    expect(reverseString('hello')).to.equal('olleh');
  });
  it('should become "ydwoH"', () => {
    expect(reverseString('Howdy')).to.equal('ydwoH');
  });
  it('should return "htraE morf sgniteerG"', () => {
    expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
  });
  it('should return "Please provide a string!"', () => {
    expect(reverseString(10)).to.equal('Please provide a string!');
  });
});
