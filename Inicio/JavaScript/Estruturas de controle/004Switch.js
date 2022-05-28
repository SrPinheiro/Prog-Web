const resultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log("Quadro de Honra")
            //break     // Break impede que execute os proximos cases
        case 8: case 7:
            console.log("Aprovado")
            //break
        case 6: case 5:
            console.log("recuperacao")
            //break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log("Nota invalida")
    }
}

resultado(10)
resultado(7)
resultado(6)
resultado(2)
resultado(0)
resultado(-7)