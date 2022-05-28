
for(let i = 1; i <=10; i++){
    console.log("Valor: ".concat(i))
}


const notas = [9.1,8.2,8.3,8.4,8.5,8.9]
for(i = 0; i < notas.length; i++){
    console.log(`Nota ${i+1}: ${notas[i]}`)
}

for (let i in notas){
    console.log(`FOR IN ${Number(i)+1}: ${notas[i]}`)
}

const pessoa = {
    nome: "Larissa",
    sobrenome: "Rodrigues",
    idade: 17,
    peso: 20
}

for(let i in pessoa){
    console.log(`${i}: ${pessoa[i]}`)
}