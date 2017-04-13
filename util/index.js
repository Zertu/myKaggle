const mkDir = require('./write/mkDir'),
    writeFile = require('./write/writeFile')
const readDir = require('./read/readDir'),
    readFile = require('./read/readFile')
const isType = require('./type')
module.exports = {
    mkDir: mkDir,
    writeFile: writeFile,
    readDir: readDir,
    readFile: readFile,
    isObject: isType.isObject,
    isString: isType.isString,
    isArray: isType.isArray,
    isFunction: isType.isFunction,
    isUndefined: isType.isUndefined
}