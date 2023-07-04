
let precoProduto = 60;
let tipoCartoes = "debito";

if(tipoCartoes == "debito"){
  let aVista = precoProduto - ((precoProduto * 10) / 100)
console.log(`valor do produto Avista: R$${aVista},00`);
} else{
  let praso = (precoProduto / 3)
    console.log(`valor do produto em 3x: R$${praso},00`);
}

    

