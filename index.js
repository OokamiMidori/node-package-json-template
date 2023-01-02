import { countries } from "./countries.js";

// console.log (countries)

const busca = process.argv[2]

// console.log(busca)

if (!busca) {
    console.log("Faltou argumento de busca")
} else {
    const resultado = countries.filter((countrie) => {
        return countrie.name.toLowerCase().includes(busca.toLowerCase())
    })
    if (resultado.length === 0) {
        console.log("Pais não encontrado")
    }
    else {
        console.log(resultado)
    }
}


