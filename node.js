Node is not a programming language.
It is a runtime env, for executing JS code.

Built on top of Chrome's v8 JS engine (edge uses chakra, firefox uses spidermonkey)

Uses non-blocking or asynchronous architecture

window, document objects are available with browers, as part of RTE. So, this is not available with node. Gives an error

globally scoped objects- console

window object can be used to access globally scoped functions-
console.log
setTimout()
clearTimeout()
setInterval()
clearInterval()

Also, you can use global.<function-name> 

var message = ""//this has file scope
console.log(global.message) //this gives 'undefined' as message is not part of global object

If same variable or function is added to global scope twice, the other one will over-ride

you need to export variables outside from a module for use.

console.log(module) logs the current module(file)
A module is a file

module.exports.log = log; //exports the log as name log 
module.exports.endPoint = url;  //exports url as endPoint

var logger = require('./logger') //export logger from relative path. it is internally converted to logger.js

const logger = require('./logger')

If you do module.exports = logger where logger is a function, then in the other module, if you do const l = require('./logger'), 
you can do l('Ankur')//const can be used 


At runtime, node converst all files into (function (exports, require, module, __filename, __dirname) {}) //this is an iffy, 
immediately invoked function expression

module wrapper function

module.exports.log = log
exports.log = log

but can't do exports = log //changes the reference

On doing ```require('path')```, node assumes by default it to be a built in module or else looks locally.

some built-in modules- os, path
const os = require('os')
const path = require('path');

const os = require('os')
var totalMem = os.totalmem()
console.log(`emem:${totalMem}`)
This memory info was not available before nodejs as JS would run in browser. And we could work only with window/document object.
We could not work with OS. 



