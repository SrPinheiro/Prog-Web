function carro(velocidadeMax = 200, Delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = _ => {
        if(velocidadeAtual + Delta >= velocidadeMax){
            velocidadeAtual = velocidadeMax
        }else{
        velocidadeAtual += Delta
        }
    }

    //metodo publico
    this.getVelocidade = _ => velocidadeAtual
}

const uno = new carro(200 ,23)

uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidade())

const ferrari = new carro(400,50)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidade())

