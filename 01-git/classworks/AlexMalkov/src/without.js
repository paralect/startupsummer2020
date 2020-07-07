function without(arr, ...values) {
    function notExist(value) {
        return !values.includes(value);
    }
    if (!arr || !arr.length) return [];
    if (!values.length) return arr;
    return arr.filter(notExist);
}

module.exports = without;