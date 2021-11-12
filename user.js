document.getElementById("btnVendedor").addEventListener("click", function () {
    document.cookie = "user=Vendedor; Thu, 2 Aug 2022 20:47:11 UTC; path=/";
    console.log('VENDEDOR TESTE');
})

document.getElementById("btnProdutor").addEventListener("click", function () {
    document.cookie = "user=Produtor; Thu, 2 Aug 2022 20:47:11 UTC; path=/";
    console.log('PRODUTOR TESTE');
})

document.getElementById("btnAdministrador").addEventListener("click", function () {
    document.cookie = "user=Administrador; Thu, 2 Aug 2022 20:47:11 UTC; path=/";
    console.log('ADMIN TESTE');
})
console.log(document.cookie);