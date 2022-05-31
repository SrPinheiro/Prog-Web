let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a

console.log(dobro(Math.PI))

ola = _ => "ola" // _ é um parametro

console.log(ola())

//Arrow 2

/*function pessoa(){
    this.idade = 0

    setInterval( () =>{
        this.idade++
        console.log(this.idade)
        clearInterval(this)
    },1000)
}

new pessoa*/


//Arrow 3

let comparar = function (param) {
    console.log(this === param)
}
comparar(global)

const obj = {}

comparar = comparar.bind(obj)
comparar(obj)

let compararArrow = a => console.log(this === a)
compararArrow(global)
compararArrow(module.exports)