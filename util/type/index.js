function isType(type) {
    return function (obj) {
        return {}.toString.call(obj) == "[object " + type + "]"
    }
}

module.exports = {
    isObject: isType("Object"),
    isString: isType("String"),
    isArray: Array.isArray || isType("Array"),
    isFunction: isType("Function"),
    isUndefined: isType("Undefined")
}