'use strict';

var config = require('config'),
  command = require('commander');

console.log('Hello World :)');

var p = new Promise(function (resolve, reject) {
  console.log('this line has no ;')
    console.log('bad indent');
});