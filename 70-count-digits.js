/* Create a function that counts the digits in a given number */
function countChars( number ) {

    if (number === 0) return 1
    let counter = 0
    let absoultNumber = Math.abs(number);

    while ( absoultNumber > 0 ) {
        
        absoultNumber = Math.floor(absoultNumber / 10)
        counter++

    }

    return counter
}

console.log( countChars( 0 ) )