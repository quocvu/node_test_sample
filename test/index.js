var should = require('should'),
  sinon = require('sinon')
  my = require('../src/index.js');

describe('My test suite', function () {
  var ben = { name: 'Ben', age: 31 },
    frank = { name: 'Frank', age: 27 },
    john = { name: 'John', age: 27 };

  it('should assess who is older', function () {
    my.older(ben, frank).should.be.equal('Ben is older than Frank');
    my.older(frank, ben).should.be.equal('Ben is older than Frank');
    my.older(john, frank).should.be.equal('John and Frank have the same age');
  })
});