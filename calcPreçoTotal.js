
setTimeout(preçototal, 0);
setInterval(preçototal, 0);

function preçototal() {
  let preço1 = Number.isNaN(parseFloat(document.querySelector('#inputB4').value)) ? 0 : parseFloat(document.querySelector('#inputB4').value);
  let preço2 = Number.isNaN(parseFloat(document.querySelector('#inputB8').value)) ? 0 : parseFloat(document.querySelector('#inputB8').value);
  let preço3 = Number.isNaN(parseFloat(document.querySelector('#inputB12').value)) ? 0 : parseFloat(document.querySelector('#inputB12').value);
  let preço4 = Number.isNaN(parseFloat(document.querySelector('#inputB16').value)) ? 0 : parseFloat(document.querySelector('#inputB16').value);
  let preço5 = Number.isNaN(parseFloat(document.querySelector('#inputB20').value)) ? 0 : parseFloat(document.querySelector('#inputB20').value);
  let precototal = preço1 + preço2 + preço3 + preço4 + preço5;
  document.querySelector('.precoTotal').textContent = precototal.toFixed(2);
}