const inRange = (...args) => {
    const number = args[0];
    let start = 0;
    let end = 0;
    if (args.length === 2) {
        end = args[1];
    }	else if (args.length === 3) {
        start = args[1];
        end = args[2];
    }
    return number >= start && number < end;
}

module.exports = inRange;
