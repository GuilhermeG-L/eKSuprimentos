function pegarUsuario(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

var user = pegarUsuario("user");
console.log(user)

var login = document.getElementById('inputLoginCod').value;
var senha = document.getElementById('inputLoginSenha').value;

var btnAcessar = document.querySelector('#btnAcessar')
btnAcessar.addEventListener('click', ()=>{
    switch(user){
        case 'produtor':
            window.api.loadscript('./sqlProdutor.js');
            //window.location = '../Telas Produtor/gerenciarOrdens.html';
            break;
        case 'vendedor':
            window.api.loadscript('./sqlVendedor.js');
            //window.location = '../Telas Vendedor/gerenciarPedidos.html';
            break;
        case 'adm':
            window.location = '../Telas Adm/gerenciarPedidosAdm.html';
            break;
    }
})


// document.getElementById("btnAcessar").addEventListener('click', function () {
//     switch(true) {
//         case(user = 'Vendedor'): aLogin.href="../Telas Vendedor/gerenciarPedidos.html"; break;
//         case(user = 'Produtor'): aLogin.href="../Telas Produtor/gerenciarOrdens.html"; break;
//         case(user = 'Administrador'): aLogin.href="../Telas Adm/gerenciarOrdens.html"; break;
//     }
// })