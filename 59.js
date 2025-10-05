/* Given an array of numbers, create a function that returns all boomerang patterns */
function countBoomerang( numbers ) {

    let counter = 0
    let boomerangs = []
    
    for (let i = 0; i < numbers.length; i++) {
        const firstNumber = numbers[i]
        const secondNumber = numbers[i+1]
        const thirdNumber = numbers[i+2]
        
        if ( firstNumber === thirdNumber && firstNumber !== secondNumber ) {
            counter++
            boomerangs.push( [firstNumber, secondNumber, thirdNumber] )
        }
    }

    return [counter, boomerangs]

}

const boomerangs = countBoomerang( [2, 1, 2, 3, 3, 4, 2, 4] )

console.log( 'There is/are: ', boomerangs[0], ' boomerang/s: ', boomerangs[1] )