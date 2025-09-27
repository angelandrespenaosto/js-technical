const data = [
    'Angel Peña',
    "Lucía Gómez",
    "Carlos Fernández",
    "María López",
    "Javier Martínez",
    "Ana Rodríguez",
    "Miguel Sánchez",
    "Laura Torres",
    "David Ramírez",
    "Sofía Castro",
    "Pablo Vega",
]

function orderByLastname( data ) {

    return data
    .map(nombre => {
      const partes = nombre.split(" ");
      return { nombreCompleto: nombre, apellido: partes[1] };
    })
    .sort((a, b) => a.apellido.localeCompare(b.apellido))
    .map(obj => obj.nombreCompleto);

    // const lastname = data.map( name => name.split(" ")[1] )

    // lastname.sort()

    // const dataOrdered = lastname.map( value => {
    //     const name = data.find( completeName => {
    //         return completeName.split(" ")[1] === value 
    //     })
    //     return name
    // })

    // return dataOrdered
}

console.log( orderByLastname( data ) )