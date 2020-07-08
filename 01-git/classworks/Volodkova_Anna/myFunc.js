function myMapArray(obj, f) {
    let arr = [];
    obj.forEach((item, index, array) => arr.push(f(item)));
    return arr;
}

function myMapObject(obj, f) {
    let arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            arr.push(f(obj[key]));
    }
    return arr;
}

function map(obj, f) {
    if (obj.__proto__ === Array.prototype)
        return myMapArray(obj, f);
    else return myMapObject(obj, f);

}


function square(n) {
    return n * n;
}

const _ = {};
Object.prototype.map = map;

console.log(_.map([4, 8], square));
console.log(_.map({'a': 4, 'b': 8}, square));



