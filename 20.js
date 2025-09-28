/* Order an array by the given property */
data = [
    { name: 'Pedro', age: 35 },
    { name: 'Ángel', age: 41 },
    { name: 'María', age: 22 },
    { name: 'Carmen', age: 44 },
    { name: 'Miguel', age: 48 },
    { name: 'José', age: 66 },
]

function orderData( data, field ) {
    return data.sort(( a, b ) => {
        if ( typeof a[field] == "number" ) {
            return a[field] - b[field] 
        }

        if ( typeof a[field] == "string" ) {
            return a[field].localeCompare( b[field] )
        }
    })
}

console.log( orderData( data, 'age' ) )