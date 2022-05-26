let valor // não incializada
console.log(valor)

valor = null //sem valor/referencia
console.log(valor)
//console.log(valor.toString())   /*TypeError

const produto = {}
console.log(produto.preco) //não da erro pois o objeto produto foi definido
console.log(produto)

produto.preco = 4.5
console.log(produto)

produto.preco = undefined //Evite atribui o valor undefined
console.log(produto)
