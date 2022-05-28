function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com: ".concat(nota))
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdade(valor){
    if(valor){
        console.log("é verdade... ".concat(valor))
    }
}

seForVerdade()

seForVerdade(null)

seForVerdade()
