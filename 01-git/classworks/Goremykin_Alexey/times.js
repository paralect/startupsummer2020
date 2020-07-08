const randomBool = () => Math.random() > 0.5;
let quantity;

const times = (randomBool, quantity) => {
    if (typeof(quantity) !== number && quantity < 1){
        return 'Error';
    }
    let result = [];
    for (let i = 0; i < quantity; i++){
        result.push(randomBool());
    } 
    return result;
}
const result = times(randomBool, quantity = 5);