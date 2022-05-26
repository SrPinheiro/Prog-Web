//Funcao sem retorno
function imprimirSoma(a,b){
        console.log(a+b)
}
imprimirSoma(5,6)


//Funcao com retorno
function somar(a, b = 0){
    return a+b
}
let resultado = somar(5,7)
console.log(resultado)

//Armazenando uma funcao em variavel
const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(2,9)

//Armazenando funcao arrow em uma variavel
const soma = (a, b) =>{
    return (a+b)
}
console.log(soma(4,3))

//Retorno implicito
const subtracao = (a, b) => a-b
console.log(subtracao(5,3))

const imprimir = a => console.log(a)

imprimir("ola mundo")