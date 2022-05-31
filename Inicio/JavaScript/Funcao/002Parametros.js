function soma(){
    let som = 0
    for (i in arguments) {
        som += arguments[i] // arguments é uma array INTERNA do js que pega todos os parametros passados
    }
    return som
}

console.log(soma())
console.log(soma(5))
console.log(soma(2,3,2))
console.log(soma(4,6,7))


