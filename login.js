

btnVendedor.addEventListener('click', function () {
    user = 'Vendedor';
})

btnProdutor.addEventListener('click', function () {
    user = 'Produtor';
})

btnAdministrador.addEventListener('click', function () {
    user = 'Administrador';
})

btnAcessar.addEventListener('click', function () {
    switch(true) {
        case(user = 'Vendedor'): aTest.href="../Telas Vendedor/gerenciarPedidos.html"; break;
        case(user = 'Produtor'): aTest.href="../Telas Produtor/gerenciarOrdens.html"; break;
        case(user = 'Administrador'): aTest.href="../Telas Adm/gerenciarOrdens.html"; break;
    }
})