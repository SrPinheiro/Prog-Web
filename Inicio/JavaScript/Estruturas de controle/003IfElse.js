Number.prototype.entre = function(inicio, fim){
    return this>= inicio && this <=fim //criando uma funcao no tipo Number
}

const resultado = function(nota){
    if(nota.entre(9,10)){
        console.log("Quadro de Honra")
    }else if(nota.entre(7,8.9)){
        console.log("Aprovado")
    }else if(nota.entre(4,6.99)){
        console.log("Recuperacao")
    }else{
        console.log("reprovado")
    }
}

resultado(10)
resultado(8)
resultado(5)
resultado(3)
resultado("teste") // erro tratado
