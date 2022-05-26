const peso1 = 1
const peso2 = Number("2.1")

console.log(peso1, peso2)
//toString retorna o valor em formato String
console.log(typeof peso1.toString())

const avaliacao1 = 9.871
const avaliacao2 = 6.871

//calculando media ponderada com peso
const total = avaliacao1 * peso1 +  avaliacao2 * peso2
const media = total / (peso1 + peso2)

//Controla a quantidade de casas decimais
console.log(media.toFixed(3))

//converte para base 2
console.log(Number(5).toString(2))

//valor Infinity
console.log(7 / 0)

//converte texto para numero automaticamente (se possivel)
console.log("10.2" / 2)

//Não converte numero direto para string
//console.log(10.toString);
//para converter utilize:
console.log((10).toString())

