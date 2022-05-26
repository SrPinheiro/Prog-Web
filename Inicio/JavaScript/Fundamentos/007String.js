const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caracter na posição 4
console.log(escola.charAt(6)) // Não retorna erro
console.log(escola.charCodeAt(3)) // Retorna valor asci
console.log(escola.indexOf("o")) // retorn a posicao da letra, caso não seja possivel retorna -1
console.log(escola.substring(0,3)) //retorna as estring no intervalo 0-3

console.log("escola: ".concat(escola)) // concatena strings
console.log(escola.replace(3, "e")) //substitui a posição 3 pelo caracter escolhido

console.log("Larissa, julia, mohammed".split(",")) // cria uma array com corte usando o caracter

//quebrando um texto
//usando variavel dentro de String
const template = `
    ola 
    ${escola}!`
console.log(template)

console.log(`1+1 = ${1+1}`)

const up = s => s.toUpperCase() //funcao arrow

console.log(`Ei... ${up('cuidado!')}`)