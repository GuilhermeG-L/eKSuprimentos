var btnEdita1 = document.querySelector('#btnEdita1');
btnEdita1.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td1').textContent);
  window.location = '../Telas Adm/editarClienteAdm.html?cod='+cod;})

var btnEdita2 = document.querySelector('#btnEdita2');
btnEdita2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td5').textContent);
  window.location = '../Telas Adm/editarClienteAdm.html?cod='+cod;})

var btnEdita3 = document.querySelector('#btnEdita3');
btnEdita3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td9').textContent);
  window.location = '../Telas Adm/editarClienteAdm.html?cod='+cod;})

var btnEdita4 = document.querySelector('#btnEdita4');
btnEdita4.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td13').textContent);
  window.location = '../Telas Adm/editarClienteAdm.html?cod='+cod;})

var btnEdita5 = document.querySelector('#btnEdita5');
btnEdita5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td17').textContent);
  window.location = '../Telas Adm/editarClienteAdm.html?cod='+cod;})