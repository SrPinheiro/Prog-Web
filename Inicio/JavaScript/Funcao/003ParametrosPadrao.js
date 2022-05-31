//est 1

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    //valor padrao das variaveis setado como 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(2,1,3))
console.log(soma1(0,0,0)) // 0 retorna false

console.log("===================================")
//est 2
function soma2(a,b,c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    
    return a + b + c
}

console.log(soma2())
console.log(soma2(2,1,3))
console.log(soma2(0,0,0))

console.log("===================================")

//valor padrao es2015
function soma3(a = 1, b = 1, c = 1){
    return a+b+c
}
console.log(soma3())
console.log(soma3(2,1,3))
console.log(soma3(0,0,0))