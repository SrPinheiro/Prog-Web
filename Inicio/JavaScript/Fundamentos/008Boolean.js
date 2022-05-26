let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1 //true
console.log(!!isativo)

//booleans verdadeiros
console.log("Verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo = true))

//booleans falsos
console.log("FALSOS")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

//por fim
let nome = "Leonardo"
console.log(nome || "Sem nome")
