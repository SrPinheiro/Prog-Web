const list = [1.9,2.8,3.7,4.6,5.5,6.5,7.3,8.2,9.1]

for(let x in list){
    if(x == 5){
        break
    }else{
        console.log(`${x}: ${list[x]}`)
    }
}
console.log("=================================")

for(let y in list){
    if(y == 5){
        continue
    }else{
        console.log(`${y}: ${list[y]}`)
    }
}

console.log("=================================")

externo: for(a in list){
    for(b in list){
        if(b == 5){
            break externo
        }
        console.log(`${a}: ${b}`)
    }
}