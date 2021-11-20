const ipc = require('electron').ipcRenderer

var btnEdita1 = document.querySelector('#btnEdita1');
btnEdita1.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td1').textContent);
  if (cod > 0) {window.location = '../Telas Adm/editarProdutoAdm.html?cod='+cod;}
  else {ipc.send('erroselect');}
})

var btnEdita2 = document.querySelector('#btnEdita2');
btnEdita2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td4').textContent);
  if (cod > 0) {window.location = '../Telas Adm/editarProdutoAdm.html?cod='+cod;}
  else {ipc.send('erroselect');}
})

var btnEdita3 = document.querySelector('#btnEdita3');
btnEdita3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td7').textContent);
  if (cod > 0) {window.location = '../Telas Adm/editarProdutoAdm.html?cod='+cod;}
  else {ipc.send('erroselect');}
})

var btnEdita4 = document.querySelector('#btnEdita4');
btnEdita4.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td10').textContent);
  if (cod > 0) {window.location = '../Telas Adm/editarProdutoAdm.html?cod='+cod;}
  else {ipc.send('erroselect');}
})

var btnEdita5 = document.querySelector('#btnEdita5');
btnEdita5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td13').textContent);
  if (cod > 0) {window.location = '../Telas Adm/editarProdutoAdm.html?cod='+cod;}
  else {ipc.send('erroselect');}
})