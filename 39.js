/* Given a number, create a function that generates all valid combination of parentheses*/
function combinationParentheses( number ) {

    let results = []

    if (number < 1) return []

    generateParentheses('', number, number, results )

    return results

}

let counterExecutions = 0

function generateParentheses( combination, opened, closed, results ) {

    if ( opened === 0 && closed === 0 ) {
        results.push( combination )
        return true
    }

    if ( opened > 0) {
        generateParentheses( combination + '(', opened-1, closed, results )
    }

    if ( closed > 0 && opened < closed ) {
        generateParentheses( combination + ')', opened, closed-1, results )
    }

    counterExecutions++

}

console.log( combinationParentheses(2) )