const forIn = require('lodash/forIn');
const isObject = require('lodash/isObject');


const traverse = (obj, func) => {
    forIn(obj, (val, key) => {
        obj[key] = func(val);
        if (Array.isArray(val)) {
            val.forEach(function(el) {
                if (isObject(el)) {
                    traverse(el, func);
                }
            });
        }
        if (isObject(key)) {
            traverse(obj[key], func);
        }
    });
    return obj;
}
