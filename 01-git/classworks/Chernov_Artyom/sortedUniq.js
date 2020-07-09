
function sortedUniq(...arr){
    if (Array.isArray(...arr)){
        return [...new Set(...arr)]
    }
    return [...new Set(arr)]
}

console.log(sortedUniq(1,2 ,3,4,3,2,1, null, undefined, undefined));

module.exports = sortedUniq;