let fetch = require ('node-fetch');

getCountry =(countryName) =>{
    fetch (`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response =>{
        return response.json();
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log("Error",error))
}

process.stdout.write('Ingrese un país (En inglés): ')
process.stdin.on('data',(chunk)=>{
    let pais = chunk.toString();
    getCountry(pais)
})


