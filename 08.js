/* Roman numeral converter */
function converterToRoman( number ) {

    let result = ""
    const originalNumber = number
    const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    for ( let i = 0; i < decimalNumbers.length; i++ ) {
        while ( number >= decimalNumbers[i] ) {
            result += romanNumbers[i]
            number -= decimalNumbers[i]
        }   
    }
    return `The number ${originalNumber} in Roman numerals is ${result}`

}

console.log( converterToRoman( 1984 ) )