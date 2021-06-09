const { expect } = require('chai');

const fn = require('../index')

describe('Some Suit', function () {
  it('Some Test', function () {
    expect(fn(1)).to.be.eql(1);
  });
});
