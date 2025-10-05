/* Given a text, create a function that returns a SEO slug */
function convertToSEOSlug( text ) {

    const slug = text
                    .toLowerCase()
                    .replaceAll(' ', '-') // .replace(/ /g, '-')
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    return slug;

}

const text = 'Crea una función que convierta cualquier frase a una SEO slug'

console.log( convertToSEOSlug( text ) )