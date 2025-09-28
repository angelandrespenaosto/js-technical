/* Given a number, build an array with the same columns and rows */
function generateArray( number ) {
    let array = []
    let actualNumber = 1

    for (let row = 0; row < number; row++) {
        array.push([])
        for (let col = 0; col < number; col++) {
            array[row].push(actualNumber++)
        }
    }

    return array
}

console.log( generateArray( 4 ) )