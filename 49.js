/* Given an array of numbers, create a function that returns the smallest number in the array */
function smallerNumber( numbers ) {

    let smaller = numbers[0]

    // numbers.forEach(num => {

    //     if ( num < smaller ) smaller = num

    // })

    // return smaller

    // reduce
    // return numbers.reduce((min, val) => val < min ? val : min, arr[0]);

    // Set
    const set = new Set( numbers )

    for (const num of set) {
        if ( num < smaller ) {
            smaller = num
        }
    }

    return smaller
}

console.log( smallerNumber( [6, 5, 4, 15, 19, 11, 3, 9, 8, 25] ) )