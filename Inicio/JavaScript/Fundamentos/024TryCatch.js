function tratarError(Erro){
    //throw new Error("sla porra")
    //throw 10
    throw {
        nome: Erro.nome,
        msg: "mensagem de erro",
        date: new Date
    }
}

function caixaAlta(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!");

    }catch(e){
        tratarError(e)
    }finally{
        console.log("ola nino")
    }
    
}

const obj = {nome: "Larissa}

caixaAlta(obj)
