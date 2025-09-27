/* Return the two numbers  Sum two numbers given the result */
function sumNumbers( numbers, result ) {

    let pairs = []

    for (let i = 0; i < numbers.length; i++) {

        let firstNumber = numbers[i]
        let secondNumber = result - firstNumber

        if ( numbers.includes( secondNumber ) && secondNumber != firstNumber ) {
            pairs.push( [ firstNumber, secondNumber] )
            // return [ firstNumber, secondNumber]
        }
        
    }

    return pairs

}

console.log( sumNumbers( [3, 7, 8, 2] , 10 ) )