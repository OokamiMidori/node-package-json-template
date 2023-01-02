import { countries } from "./countries.js";

// Um script q adiciona um pais à lista de paises

const name = process.argv[2]
const code = process.argv[3]

// console.log(name)
// console.log(code)

if(!name || !code){
    console.log("Faltou o nome ou o código do país")
}else{
    const novoPais = {
        name,
        code,
    }
    countries.push(novoPais)

    console.log(countries[countries.length - 1])
}