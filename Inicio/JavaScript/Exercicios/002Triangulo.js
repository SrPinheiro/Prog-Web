/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function isTriangulo(x, y, z){
        console.log("O triangulo é: ")
        if(x == y && x == z && y == z){
            console.log("Equilátero!")
        }else if(x == y || y == z || z == x){
            console.log("Isósceles")
        }else{
            console.log("escaleno")
        }
    
}
isTriangulo(9, 9 ,9)
