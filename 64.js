/* Create a function that checks whether the parentheses, braces, and brackets in an expression are balanced */
function checkExpression( exp ) {

    const stack = []

    const pairs = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }

    for ( const char of exp ) {
        
        if ( char in pairs ) {
            stack.push( char )
        } else if ( Object.values( pairs ).includes( char ) ) {

            if ( pairs[ stack.pop() ] !== char ) return false

        }

    }

    return stack.length === 0
}

console.log( checkExpression( '{ [ x * ( y + z ) ] * 12 }' ) )
console.log( checkExpression( '{  x * ( y + z ) ] + 12 }' ) )