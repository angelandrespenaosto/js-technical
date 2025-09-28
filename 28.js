/* Given a number, check if it is an armstrong number */

function isArmstrong( number ) {

    const numberString = number.toString()
    const length = numberString.length
    let sum = 0

    for (let i = 0; i < length; i++) {
        sum += Math.pow( parseInt(numberString[i]), length )
    }

    if ( sum === parseInt( number ) ) {
        result = `The number ${ number } is armstrong`
    } else {
        result = `The number ${ number } is not armstrong`
    }
    return result
}

console.log( isArmstrong( 372 ) )