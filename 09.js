/* Sum only the pairs numbers */
function sumPairs( numbers ) {

    let sum = 0

    numbers.forEach(number => {
        if ( number % 2 === 0 ) {
            sum += number
        }
    })

    return sum

}

const numbers = [1, 2, 4, 5, 9, 12]

console.log( sumPairs(numbers) )