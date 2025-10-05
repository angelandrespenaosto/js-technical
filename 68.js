/* Generate a function that returns a random password */
function generatePassword( length, upperCase, numbers, symbols ) {

    if ( length < 6 || length > 20 ) return ''

    let password = '';
    let dictionary = 'abcdefghijklmnopqrstuvwxyz'
    
    if ( upperCase ) dictionary += dictionary.toUpperCase()
    if ( numbers ) dictionary += '0123456789'
    if ( symbols ) dictionary += '!@€#~$%&-·}ç[_.,(|'

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor( Math.random() * dictionary.length )
        password += dictionary.charAt( randomIndex )
    }

    return password
}

console.log( generatePassword( 15, true, true, true ) )