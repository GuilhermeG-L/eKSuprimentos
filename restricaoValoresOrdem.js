// Declaração de variáveis
var arrCodProd = document.querySelectorAll('.codProduto')

// Função

arrCodProd.forEach(codProd=>{
    codProd.addEventListener('change', ()=>{
        var valor = codProd.value
        codProd.value = valor < 0 ? 0 : codProd.value
    })
})