function intervalo(min,max){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor)
}

let opcao = -1
while(opcao != -1){ 
    opcao = intervalo(-1,10);
    console.log(opcao)
}

do{ //acontece pelomenos 1 vez mesmo que a estrutura seja false
    opcao = intervalo(-1,10);
    console.log(opcao)
}while(opcao != -1)