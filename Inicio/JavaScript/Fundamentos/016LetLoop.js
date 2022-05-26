        for(let i = 0; i < 10; i++) {
            console.log(i)
        }
//console.log("I = " + i) // erro pois a variavel let so existe dentro do bloco for


let funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()