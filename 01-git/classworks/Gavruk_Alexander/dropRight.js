const dropRight = (array, n = 1) => {
    if (n >= array.length) {
        return [];
    }

    array.splice(array.length - n, n);

    return array;
}

module.exports = dropRight;
