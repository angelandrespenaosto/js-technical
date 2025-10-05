/* Given an array of numbers, create a function that returns the cumulative sums of the array */

function cumulativeSum( numbers ) {
    const result = []
    // let sum = 0

    // for ( const number of numbers ) {
    //     sum += number
    //     result.push( sum )
    // }

    // return result

    numbers.reduce((acc, val) => {
        const sum = acc + val
        result.push( sum )
        return sum
    }, 0)

    return result
}

console.log( cumulativeSum( [ 1, 2, 3, 4, 5 ] ) )