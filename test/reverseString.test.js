import {expect} from 'chai';
import reverseString from '../src/reverseString.js';

describe('test reverseString', () => {

  describe('check data type', () => {
    it('should return a string', () => {
      expect(reverseString('hello')).to.be.a('string');
    });
    it('should throw an error', () => {
      function wrappedFunction() {
        return reverseString(10);
      }
      expect(wrappedFunction).to.throw('Error: need to provide a string.');
    });
  });

  describe('check reversed string', () => {
    it('should become "olleh"', () => {
      expect(reverseString('hello')).to.equal('olleh');
    });
    it('should become "ydwoH"', () => {
      expect(reverseString('Howdy')).to.equal('ydwoH');
    });
    it('should return "htraE morf sgniteerG"', () => {
      expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
    });
  });

});
