const median = (...numbers) => {
    numbers.sort((a, b) => a - b);
    if(numbers.length === 0){
        return 'Error'
    }else if(numbers.length % 2){
        return numbers[Math.floor(numbers.length / 2)]
    }else if (numbers.length > 1){
        return (numbers[numbers.length / 2] + numbers[(numbers.length / 2) - 1]) / 2
    } 

    return numbers[0];
}

console.log(median(5, 9, 6, 1, 13, 24));