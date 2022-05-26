{
    {
        {
            {
                {
                 var sera = "Sera?" //visivel em qualquer lugar do programa
                }
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123 // visivel somente dentro da funcao
    console.log(local)
}
//console.log(local) // nao é possivel usar a variavel local pois ela esta dentro de uma funcao


var numero = 1 // as 2 variaveis numero sao a mesma variavel
{
    var numero = 2 // as 2 variaveis numero sao a mesma variavel
    console.log("dentro: " + numero) 
}
console.log("fora: " + numero)