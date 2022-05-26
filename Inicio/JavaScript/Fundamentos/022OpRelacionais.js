console.log("1" == 1) // São iguais? convertendo Sim | true

console.log("1" === 1) // Exatamente iguais? não pois um é string  | false

console.log("1" != 1)  // são diferentes? nao | false

console.log("1" !== 1) // são exatamente diferentes? sim |true

const d1 = new Date(0);

const d2 = new Date(0);

console.log(d1 == d2) //compara referencia de memoria | false

console.log(d1.getTime() == d2.getTime()) //comparando numeros |true

console.log(undefined == null) // os 2 nao tem valores  | true

console.log(undefined === null) //nao sao a mesma coisa  | false