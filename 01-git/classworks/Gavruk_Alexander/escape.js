const escape = (str = '') => {
    console.log(str.split(''));
    const symbolsToChange = ['&', '<', '>', '"', "'"];
    const rightSymbols = ['&#38;', '&#60;', '&#62;', '&#34;', '&#39;'];
    return str.split('')
            .map(elem => symbolsToChange.indexOf(elem) === -1 ? elem : rightSymbols[symbolsToChange.indexOf(elem)])
            .join('');
    }

module.exports = escape;
