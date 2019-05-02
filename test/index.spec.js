/* eslint-disable no-undef */
var chai = require('chai');
var expect = chai.expect;
var index = require('index.js');

describe('tests index', () => {
  describe('function intToRoman', () => {
    it('1 to I', () => {
      expect(index.intToRoman('1')).to.equal('I');
    });

    it('11 to XI', () => {
      expect(index.intToRoman('11')).to.equal('XI');
    });

    it('111 to CXI', () => {
      expect(index.intToRoman('111')).to.equal('CXI');
    });

    it('1111 to MCXI', () => {
      expect(index.intToRoman('1111')).to.equal('MCXI');
    });

    it('3111 to MMMCXI', () => {
      expect(index.intToRoman('3111')).to.equal('MMMCXI');
    });
  });

  describe('function romanToInt', () => {
    it('I to 1', () => {
      expect(index.romanToInt('I')).to.equal(1);
    });

    it('XI to 11', () => {
      expect(index.romanToInt('XI')).to.equal(11);
    });

    it('CXI to 111', () => {
      expect(index.romanToInt('CXI')).to.equal(111);
    });

    it('MCXI to 1111', () => {
      expect(index.romanToInt('MCXI')).to.equal(1111);
    });

    it('MMMCMXCIX to 3999', () => {
      expect(index.romanToInt('MMMCMXCIX')).to.equal(3999);
    });
  });
});