//Call
function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda}: ${this.preco * (1-this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4500,
    desconto: 0.15,
    getPreco
}

console.log(produto.getPreco())

console.log(getPreco.call(produto, 0.17,"EU")) // passo diretamentos os parametros
console.log(getPreco.apply(produto, [0.17,"BTC"] )) // passo os parametros dentro de uma array