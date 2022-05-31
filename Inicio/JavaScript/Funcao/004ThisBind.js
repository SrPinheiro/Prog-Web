const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // pq a variavel falar n tem uma saudacacao

const falarDePessoa = pessoa.falar.bind(pessoa) //bind amarra o this ao objeto
falarDePessoa()

//thisBind 02
//console.log(self)


function people(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
        
        if(this.idade > 2){
            clearInterval(b)
        }
        
    }.bind(this), 1000)

    clearInterval()
    


}
console.log("teste")
let pessoa2 =  new people