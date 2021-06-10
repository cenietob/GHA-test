const { expect } = require('chai');

const fn = require('../lib/index');

describe('Some Suit', () => {
  it('Some Test', () => {
    expect(fn(1)).to.be.eql(1)
  });
});
