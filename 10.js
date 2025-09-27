/* Calculate the DNI letter */
const lettersDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']


function generateDNILetter( dniNumber ) {

    dniNumber = parseInt(dniNumber)

    if ( dniNumber > 0 && dniNumber < 99999999 ) {
        const indexLetter = dniNumber % 23

        const letter = lettersDNI[indexLetter]

        return `${dniNumber}${letter}`
        
    } else {
        return `Invalid DNI number`
    }

}

console.log( generateDNILetter(43587904) )