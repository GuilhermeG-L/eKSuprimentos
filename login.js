let user = document.cookie;

console.log(user);
document.getElementById("btnAcessar").addEventListener('click', function () {
    switch(true) {
        case(user = 'Vendedor'): aLogin.href="../Telas Vendedor/gerenciarPedidos.html"; break;
        case(user = 'Produtor'): aLogin.href="../Telas Produtor/gerenciarOrdens.html"; break;
        case(user = 'Administrador'): aLogin.href="../Telas Adm/gerenciarOrdens.html"; break;
    }
})