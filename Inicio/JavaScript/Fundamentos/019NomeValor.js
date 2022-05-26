// par nome/valor
const saudacao = 'opa' // contexto lexico 1

function test(){
    const saudacao = 'opa2' // contexto lexico 2
    return saudacao
}
console.log(test())

//Objetos são grupos aninhados de pares nome/valor
const client = {
    nome: "pedro",
    idade: 32,
    endereco: {
        logradouro: "Rua muito legal",
        numero: 666,
    }
}
console.log(client)