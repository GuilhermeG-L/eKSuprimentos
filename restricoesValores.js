// Declaração de Variáveis
var campoBusca = document.querySelector('.inputPesquisa')


// Eventos
campoBusca.addEventListener('change', verificaCod)

// Funções

function verificaCod(){
    var valor = campoBusca.value
    campoBusca.value = valor < 0 ? 0 : campoBusca.value
}
