var btnVisualiza1 = document.querySelector('#btnVisualiza1');
btnVisualiza1.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td1').textContent);
  window.location = '../Telas Adm/detalhesDaOrdemAdm.html?cod='+cod;})

var btnVisualiza2 = document.querySelector('#btnVisualiza2');
btnVisualiza2.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td5').textContent);
  window.location = '../Telas Adm/detalhesDaOrdemAdm.html?cod='+cod;})

var btnVisualiza3 = document.querySelector('#btnVisualiza3');
btnVisualiza3.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td9').textContent);
  window.location = '../Telas Adm/detalhesDaOrdemAdm.html?cod='+cod;})

var btnVisualiza4 = document.querySelector('#btnVisualiza4');
btnVisualiza4.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td13').textContent);
  window.location = '../Telas Adm/detalhesDaOrdemAdm.html?cod='+cod;})

var btnVisualiza5 = document.querySelector('#btnVisualiza5');
btnVisualiza5.addEventListener('click', ()=>{
  let cod = parseInt(document.querySelector('#td17').textContent);
  window.location = '../Telas Adm/detalhesDaOrdemAdm.html?cod='+cod;})