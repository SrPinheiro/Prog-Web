const notas = [ 7.7, 6.5, 5.2, 8.9]

notas.forEach(a => {
    if(a < 7){
        console.log(`a nota: "${a}" é menor do que 7`)
    }
})

notasbaixas = notas.filter( a => a <=7 )
console.log(notasbaixas)