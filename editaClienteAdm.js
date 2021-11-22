const ipc = require('electron').ipcRenderer

var btnEdita1 = document.querySelector('#btnEdita1');
btnEdita1.addEventListener('click', ()=>{
  let nomeCliente = document.querySelector('#td2').textContent;
  if (nomeCliente != '') {window.location = '../Telas Adm/editarClienteAdm.html?nome='+nomeCliente;}
  else {ipc.send('erroselect');}
})

var btnEdita2 = document.querySelector('#btnEdita2');
btnEdita2.addEventListener('click', ()=>{
  let nomeCliente = document.querySelector('#td6').textContent;
  if (nomeCliente != '') {window.location = '../Telas Adm/editarClienteAdm.html?nome='+nomeCliente;}
  else {ipc.send('erroselect');}
})

var btnEdita3 = document.querySelector('#btnEdita3');
btnEdita3.addEventListener('click', ()=>{
  let nomeCliente = document.querySelector('#td10').textContent;
  if (nomeCliente != '') {window.location = '../Telas Adm/editarClienteAdm.html?nome='+nomeCliente;}
  else {ipc.send('erroselect');}
})

var btnEdita4 = document.querySelector('#btnEdita4');
btnEdita4.addEventListener('click', ()=>{
  let nomeCliente = document.querySelector('#td14').textContent;
  if (nomeCliente != '') {window.location = '../Telas Adm/editarClienteAdm.html?nome='+nomeCliente;}
  else {ipc.send('erroselect');}
})

var btnEdita5 = document.querySelector('#btnEdita5');
btnEdita5.addEventListener('click', ()=>{
  let nomeCliente = document.querySelector('#td18').textContent;
  if (nomeCliente != '') {window.location = '../Telas Adm/editarClienteAdm.html?nome='+nomeCliente;}
  else {ipc.send('erroselect');}
})