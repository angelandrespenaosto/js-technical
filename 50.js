/* Temperature converter */
function tempConverter( temp ) {

    const type = temp.slice(-1)
    const value = parseFloat(temp.slice(0, -2))

    if ( type !== 'C' && type !== 'F' ) return 'Invalid format'

    if ( isNaN( value ) ) return 'Invalid format'

    if ( type === 'C' ) {
        return ( value * 9 / 5 + 32 ).toFixed(2)
    } else {
        return ( ( value - 32 ) * 5 / 9 ).toFixed(2)
    }

}

console.log( tempConverter( '29°C' ) )
console.log( tempConverter( '77°F' ) )