/* Simulate the roll of two dice */
function diceRolling() {
    let die1 = Math.floor(Math.random() * 6) + 1
    let die2 = Math.floor(Math.random() * 6) + 1

    return [die1, die2]
}

console.log( diceRolling() )