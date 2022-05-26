//destructuring com objeto
const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: "rua abc",
        numero: 1000,
    }
}

const { nome, idade} = pessoa // extraia os valores nome e idade do objeto pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa // extrair valores e aplicar nas variaveis n i
console.log(n, i)

const {sobrenome, humor} = pessoa
console.log(sobrenome, humor) // quando nao tem o valor, retorna undefined

const {endereco: {logradouro, numero, cep}} = pessoa // pegando objeto dentro do objeto
console.log(numero, cep)


//destructuring com array
const [a] = [10] 
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9 , 8] //ordem de atribuicao
console.log(n1,n3,n5,n6)

const [ ,[ , nota]] = [[,8, 8], [9,6,8]] // segunda lista e segundo caracter 
console.log(nota)


//destructuring com funcoes e objetos

function rand({min = 0, max = 1000}){ //pegando valores min e max de um objeto
    const valor =  Math.random() * (max-min) + min //calculo para pegar numeros dentro do intervalo
    return Math.floor(valor) //arredonda para baixo
}

const obj = {
    min: 40,
    max: 40
}
console.log(rand(obj))



//destructuring com funcoes e arrays

function rand2([min = 0, max = 1000]){
    if(min > max) [min, max] = [max,min] // troca de valores com destructuring
    const valor = Math.random() * (max-min) + min //calculo para pegar numero no intervalo
    return Math.floor(valor)
}

console.log(rand2([50,30]))