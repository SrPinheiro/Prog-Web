function area(la,al){
    const area = (la*al)

    if(area > 20){
        console.log(`Valor não permitido: ${area}m²`)
    }else{
        return area
    }
}

console.log(area(1,3))
console.log(area(2))
console.log(area(2,5,6))
console.log(area(5,5))