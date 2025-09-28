/* Given an array of file names, return the same array of names, but with a sequential number appended in case of duplicates */
const files = [
    "nombre", 
    "apellido", 
    "nombre", 
    "nombre",
    "file",
    "file",
]
/*
function renameFiles( files ) {

    return files.map((file, i) => {
        
        let filtered = files.slice(0, i).filter(fileFiltered => file === fileFiltered)

        return filtered.length === 0 ? file : `${file}(${filtered.length})`
    })

}
*/
function renameFiles( files ) {

    const nameCount = {};
    const result = [];

    files.forEach(name => {
        console.log( nameCount[name] )
        
        if (nameCount[name]) {
            result.push(`${name}(${nameCount[name]})`);
            nameCount[name]++;
        } else {
            result.push(name);
            nameCount[name] = 1;
        }
    });

    return result;

}

console.log( renameFiles( files ) )