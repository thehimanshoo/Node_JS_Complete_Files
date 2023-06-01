// to import greet function
const util = require('./util/utility')

// call a function to print
util.greet('Rajpoot', 'Himanshu');

// to import reverse string function
let message = 'Rajpoot Himanshu';
let revStr = util.convertReverse(message);
console.log(`${message} => ${revStr}`);