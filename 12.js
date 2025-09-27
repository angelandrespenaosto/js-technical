/* Count words */
function countWords( text ) {

    let wordCount = {}
    const words = text.toLowerCase()
                        .replace(/[.,]/g, "")
                        .split(" ")

    words.forEach(word => {

        wordCount[word] = ( wordCount[word] || 0 ) + 1

    })
    
    const sorted = Object.entries(wordCount)
                       .sort((a, b) => b[1] - a[1])

    return sorted
    // return wordCount.sort((a , b) => a > b )
    
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie dui nec quam ultricies tempus. Aliquam ultricies ante vel laoreet iaculis. Vivamus euismod, metus et ultrices sodales, magna orci malesuada massa, quis ornare quam ante quis enim. Suspendisse posuere libero id quam aliquet, bibendum pretium dolor mattis'

console.log( countWords( text ) )