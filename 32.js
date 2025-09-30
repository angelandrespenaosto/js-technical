/* Given a text, create a function that generates a new text containing only words with four characters */
function filteredText( originalText ) {

    const words = originalText.split( " " )

    const filtered = words.filter( word => word.length >= 4 )

    return filtered.join(" ")

}

const originalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis cursus neque, a blandit tortor consequat quis"

console.log( filteredText( originalText ) )