// Declaração de Variáveis
var codCliente = document.querySelector('.inputCodCli')
var codVendedor = document.querySelector('.inputCodVend')
var arrInputCodProduto = document.querySelectorAll('.codProduto')
var arrInputMetragem = document.querySelectorAll('.metrProduto')
var arrInputQtd = document.querySelectorAll('.qtdProduto')

console.log(`
CodCliente: ${codCliente}
CodVendedor: ${codVendedor}
Array inputCodProduto: ${arrInputCodProduto}
Array inputMetradgem: ${arrInputMetragem}
Array inputQuantidade: ${arrInputQtd}
`)

// Eventos
codCliente.addEventListener('change', verificaCodCliente)
codVendedor.addEventListener('change', verificaCodVendedor)

arrInputCodProduto.forEach(codProd=>{
    codProd.addEventListener('change', function(){
        var valor = codProd.value
        codProd.value = valor < 1 ? 1 : codProd.value
    })
})

arrInputMetragem.forEach(metrProd=>{
    metrProd.addEventListener('change', function(){
        var valor = metrProd.value
        metrProd.value = valor < 0.001 ? 0.001 : metrProd.value
    })
})

arrInputQtd.forEach(qtdProd=>{
    qtdProd.addEventListener('change', function(){
        var valor = qtdProd.value
        qtdProd.value = valor < 1 ? 1 : qtdProd.value
    })
})

// Funções

function verificaCodCliente(){
    var valor = codCliente.value
    codCliente.value = valor < 0 ? 0 : codCliente.value
}

function verificaCodVendedor(){
    var valor = codVendedor.value
    codVendedor.value = valor < 0 ? 0 : codVendedor.value
}
