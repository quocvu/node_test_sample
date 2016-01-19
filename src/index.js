'use strict';

module.exports = {
  older: function (a, b) {
    if (a.age > b.age) {
      return a.name + ' is older than ' + b.name;
    } else if (b.age > a.age) {
      return b.name + ' is older than ' + a.name;
    } else {
      return a.name + ' and ' + b.name + ' have the same age';
    }
  }
}