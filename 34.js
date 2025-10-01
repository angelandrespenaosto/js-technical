/* Given an array, create a function that returns an object grouping the elements by value */
function groupElements( data, groupedBy ) {

    let result = {};

    data.forEach(element => {
        
        let property = typeof groupedBy === "function" ? groupedBy(element) : element[groupedBy]

        if( !result[property] ) result[property] = []

        result[property].push(element)

    })

    console.log( result )
}

groupElements( [7.3, 5.3, 7.4 ], Math.floor )

groupElements( ['one', 'two', 'three', 'four', 'five'], 'length' )

groupElements( [
    { name: "angel", age: 41 },
    { name: "maria", age: 35 },
    { name: "luis", age: 22 },
    { name: "marta", age: 55 },
    { name: "marc", age: 22 },
], 'age' )