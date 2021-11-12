// window.api.loadscript('./server.js');

function passarTipoUsuario(user){
    window.location = "Arquivos HTML/Telas de Login/login.html?user="+user
}

// Declaração dos botões

var botoesUsuarios = document.querySelectorAll('.btnUsuario')

botoesUsuarios.forEach((e)=>{
    e.addEventListener('click',()=>{
        passarTipoUsuario(e.value)
    })
})
