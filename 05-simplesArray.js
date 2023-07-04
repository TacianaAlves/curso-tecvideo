function simplesArray(array) {
    let soma = 0;
    for(let index = 0; index < array.length; index +=1){
        soma = soma + array[index];
    }
    return soma;   
};

console.log(simplesArray([1, 2, 3, 10]));