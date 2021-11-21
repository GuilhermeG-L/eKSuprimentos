
setTimeout(preçototal, 0);
setInterval(preçototal, 0);

function preçototal() {
  let preço1 = Number.isNaN(parseFloat(document.querySelector('#inputB6').value)) ? 0 : parseFloat(document.querySelector('#inputB6').value);
  let preço2 = Number.isNaN(parseFloat(document.querySelector('#inputB12').value)) ? 0 : parseFloat(document.querySelector('#inputB12').value);
  let preço3 = Number.isNaN(parseFloat(document.querySelector('#inputB18').value)) ? 0 : parseFloat(document.querySelector('#inputB18').value);
  let preço4 = Number.isNaN(parseFloat(document.querySelector('#inputB24').value)) ? 0 : parseFloat(document.querySelector('#inputB24').value);
  let preço5 = Number.isNaN(parseFloat(document.querySelector('#inputB30').value)) ? 0 : parseFloat(document.querySelector('#inputB30').value);
  let precototal = preço1 + preço2 + preço3 + preço4 + preço5;
  document.querySelector('.precoTotal').value = precototal.toFixed(2);
}