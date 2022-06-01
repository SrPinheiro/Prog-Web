//factory simples

function criarPessoa(nome,idade,sexo){ // uma funcao que cria objetos
    return{
        nome,
        idade,
        sexo
    }
}
console.log(criarPessoa("Larissa",17,"F"))
