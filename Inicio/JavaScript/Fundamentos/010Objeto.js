const prod1 = {} 
prod1.nome = "Redmi Note 8"
prod1.preco = 2000
prod1['desconto'] = 0.2 //evite atributos com espacos

console.log(prod1)

// colocando objetos dentro de objetos
const prod2 = {
    nome: "Air Jordan",
    preco: 20500,
    desconto: 0,
    obj: {
        blabla: 101,
        obj:{
            blabla2: 101,
        }
    }

} 
console.log(prod2)
