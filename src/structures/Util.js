const path = require('path')
const { promisify } = require('util')
const glob = require('glob')
const Command = require('./Command.js')

module.exports = class Util {

    constructor(client) {
        this.client = client;
    }

    isClass(input) {
        return typeof input == 'function' &&
        typeof input.prototype === 'object' &&
        input.toString().substring(0,5) === 'class';
    }

    get directory() {
        
    }
}