import {expect} from 'chai';
import reverseString from '../src/reverseString.js';

describe('test reverseString with a string "hello"', () => {
  it('should return a string', () => {
    expect(reverseString('hello')).to.be.a('string');
  });
  it('should become "olleh"', () => {
    expect(reverseString('hello')).to.equal('olleh');
  });
});

describe('test reverseString with a string "Howdy"', () => {
  it('should become "ydwoH"', () => {
    expect(reverseString('Howdy')).to.equal('ydwoH');
  });
});

describe('test reverseString with a string "Greetings from Earth"', () => {
  it('should return "htraE morf sgniteerG"', () => {
    expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
  });
});
