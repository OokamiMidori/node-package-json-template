const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos.
Em sete anos você terá ${novaIdade}`)