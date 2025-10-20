/* Given an array of numbers and a target sum, create a function that returns the pairs of numbers whose sum matches the target value*/
function findPairs(numbers, sum) {
    if (!Array.isArray(numbers) || numbers.length < 2) {
        return false
    }

    const seen = new Set()
    const pairs = []

    numbers.forEach(num => {

        const complement = sum - num

        if (seen.has(complement)) {
            pairs.push([complement, num])
        }

        seen.add(num)
    })

    return pairs
}

console.log(findPairs([2, 4, 3, 5, 8, 9, 1], 9))