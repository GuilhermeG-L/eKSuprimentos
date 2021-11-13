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


var btnAcessar = document.querySelector('#btnAcessar')
btnAcessar.addEventListener('click', ()=>{
    switch(user){
        case 'produtor':
            window.api.loadscript('./sqlProdutor.js');
            break;
        case 'vendedor':
            window.api.loadscript('./sqlVendedor.js');
            break;
        case 'adm':
            verifAdm();
            break;
    }
})

// Função de Login Admin.
function verifAdm() {
    var log = document.getElementById('inputLoginCod').value;
    var sen = document.getElementById('inputLoginSenha').value;
    if (log == 'admin' && sen == 'KSuprimentos') {window.location = '../Telas Adm/gerenciarPedidosAdm.html'; console.log(sen); console.log(log);}
    else {window.location = 'login.html?user='+user; console.log(sen); console.log(log);}
}