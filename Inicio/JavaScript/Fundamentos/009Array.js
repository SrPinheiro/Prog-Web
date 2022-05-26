const notas = [7.8, 8.9, 6.3, 9.9]
console.log(notas[5]) // valor undefined

notas[10] = 5
console.log(notas) //6 blocos vazios
console.log(notas.length)

delete notas[1] // deleta um bloco da array
console.log(notas) 

console.log(typeof notas) //tipo objeto