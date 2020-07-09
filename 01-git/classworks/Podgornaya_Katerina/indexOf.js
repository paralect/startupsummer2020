'use strict'

function indexOf (array, element) {
    let find = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            find = true;
            return i;
        }  
    }
    if (find === false) {
        return -1;
    }
}

