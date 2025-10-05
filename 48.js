/* Given an array of numbers, create a function that cubes each number and returns half of each result */
function cubes( numbers ) {
    // return numbers.map(number => ( number ** 3 ) / 2)
    return numbers.map( number => ( Math.pow( number, 3 ) / 2) )
}

console.log( cubes([1, 2, 3, 4]) )