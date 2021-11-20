
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

switch(user){
    case 'produtor':
        window.api.loadscript('./loginProdutor.js');
        break;
    case 'vendedor':
        window.api.loadscript('./loginVendedor.js');
        break;
    case 'adm':
        window.api.loadscript('./loginAdm.js');
        break;
}