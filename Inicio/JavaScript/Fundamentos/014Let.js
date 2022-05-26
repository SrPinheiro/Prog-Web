{
    {
        {
            {
                {
                 let sera = "Sera?" //visivel somento no bloco
                }
            }
        }
    }
}
//console.log(sera) // não é possivel utilizar

function teste(){
    let local = 123 // visivel somente dentro da funcao
    console.log(local)
}
//console.log(local) // nao é possivel usar a variavel local pois ela esta dentro de uma funcao


let numero = 1 // as variaveis numeros são diferentes pois estão em blocos diferentes
{
    let numero = 2 // as variaveis numeros são diferentes pois estão em blocos diferentes
    console.log("dentro: " + numero) 
}
console.log("fora: " + numero)