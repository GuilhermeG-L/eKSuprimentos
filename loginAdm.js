const ipc = require('electron').ipcRenderer

btnAcessar.addEventListener('click', ()=>{

// Login Admin.
  var log = document.getElementById('inputLoginCod').value;
  var sen = document.getElementById('inputLoginSenha').value;
  if (log == 'admin' && sen == 'KSuprimentos') {window.location = '../Telas Adm/gerenciarProdutosAdm.html';}
  else {ipc.send('errologin');}


})