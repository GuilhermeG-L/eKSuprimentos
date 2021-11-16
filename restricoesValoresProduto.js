// Declaração das variáveis
var codProduto = document.querySelector('#input2')
var precoProduto = document.querySelector('#input3')

// Eventos

codProduto.addEventListener('change', limitaValorCod)
precoProduto.addEventListener('change', limitaValorPreco)

// Funções

function limitaValorCod(){
    var valor = codProduto.value
    codProduto.value = valor < 0 ? 0 : codProduto.value
}

function limitaValorPreco(){
    var valor = precoProduto.value
    precoProduto.value = valor < 0 ? 0 : precoProduto.value
}