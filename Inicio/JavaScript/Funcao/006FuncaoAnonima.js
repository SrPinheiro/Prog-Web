const soma = function(x,y){
    return x + y
}
const subtrair = function(x,y){
    return x - y
}

const imprimir = function (a,b,c = soma){
    console.log(c(a,b))
}

imprimir(3,4)
imprimir(3,4,subtrair)
imprimir(3,4, (x,y) => x * y)