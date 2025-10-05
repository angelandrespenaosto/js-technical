/* Given a text, create a function that censors specific words */
function censorText( text, word ) {

    if ( text.includes( word ) ) {
        return text.replaceAll( word, '*'.repeat( word.length ) )
    }

}

text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc mauris, dolor egestas ut ipsum sed, cursus convallis justo. Aenean id ornare mi. Nulla quis nulla a felis varius suscipit non vitae ex. Nunc sollicitudin pellentesque ex ut malesuada. Vestibulum efficitur nunc eget ultricies sollicitudin. Sed ac condimentum leo. Aenean molestie, tortor posuere tristique feugiat, arcu lorem rutrum diam, lacinia pellentesque mauris nulla sed nunc. Nam facilisis tempor eleifend. Morbi dignissim aliquam nisl, nec placerat nulla placerat vel. Quisque et orci ac magna ornare fermentum.'

console.log ( censorText(text, 'Nulla' ) )