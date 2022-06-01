class pessoa{
    constructor(nome = null, idade = 18, sexo = null){
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo
    }
    falar(){
        console.log("Ola Mundo")
    }
}

const lari = new pessoa("Larissa", 17, "F")

lari.falar()


//a mesma coisa so que feita com uma funcao
const pessoa2 = (nome = null, idade = 18, sexo = null) =>{
    return{
        nome,idade,sexo,
        falar:() => console.log("Hello Word")
    }
}
const logan = pessoa2("logan", 15, "M")
logan.falar()