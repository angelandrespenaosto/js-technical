/* Expense optimization tool */
function partner(times) {

    let singleFuelling = 10 * times
    let partnerFuelling = 90

    for (let i = 1; i <= times; i++) {
        
        let discount = (0.78**i)
        
        // discount (max discount 50%)
        if (discount <= 0.5) {
            discount = 0.5
        }
        
        partnerFuelling += 8.2 * discount
    }

    let result = `As single user, it costs you: ${singleFuelling}
And as member or partner, you pay only: ${parseFloat( partnerFuelling.toFixed(2) )}
    `

    return result
}

console.log( partner(15) )