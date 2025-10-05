/* Given an array of user objects, create a function that sorts them by the date field */
function orderByDate( data ) {
    data.sort( ( a, b ) => b.date - a.date )

    return data.map( user => user.name )
    // return data
}

const data = [
  {
    name: "Juan",
    date: new Date(1984, 7, 10),
  },
  {
    name: "Paco",
    date: new Date(2017, 8, 12),
  },
  {
    name: "Pepe",
    date: new Date(1991, 12, 6),
  },
]

console.log( orderByDate( data ) )