/*global require console */
var cuid = require('../dist/node-cuid.js');
var i;

for (i = 0; i < 10; i++) {
  console.log(cuid());
}
