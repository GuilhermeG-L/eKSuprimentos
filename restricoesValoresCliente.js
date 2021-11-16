// Declaração de Variáveis
var inputNome = document.querySelector('#input2')
var inputCpf = document.querySelector('#input3')
var inputTel = document.querySelector('#input4')

// Eventos

inputNome.addEventListener('change', verificaNome)
inputCpf.addEventListener('change', verificaCPF)
inputTel.addEventListener('change', verificaTel)

// Funções

function verificaNome(){{
    var nome = inputNome.value.split('')
    var achouNum = false
    nome.forEach((e)=>{
        var cod = e.charCodeAt(0)
        if(cod <= 57 && cod >= 48){
            achouNum = true
        }
    })
    if(achouNum){
        inputNome.value = ''
    }
}}


function verificaCPF(){
    var arrCpf = inputCpf.value.split('')
    var [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11] = arrCpf
    if(arrCpf.every((e)=>{return e == n1})){
        return false
    }else{
        var soma = (parseInt(n1)*10) + (parseInt(n2)*9) + (parseInt(n3)*8) + (parseInt(n4)*7) + (parseInt(n5)*6) + (parseInt(n6)*5) + (parseInt(n7)*4) + (parseInt(n8)*3) + (parseInt(n9)*2)
        var resto1 = (soma * 10)%11
        if(resto1 == 10){
            resto1 = 0
        }

        var soma2 = (parseInt(n1) * 11) + (parseInt(n2) * 10) + (parseInt(n3) * 9) + (parseInt(n4) * 8) + (parseInt(n5) * 7) + (parseInt(n6) * 6) + (parseInt(n7) * 5) + (parseInt(n8) * 4) + (parseInt(n9) * 3) + (parseInt(n10) * 2)
        var resto2 = (soma2 * 10) % 11
        if(resto2 == 10){
            resto2 = 0
        }
        if((resto1 == parseInt(n10)) && (resto2 == parseInt(n11))){
            return true
        }else{
            inputCpf.value = ''
            return false
        }
    }
}

function verificaTel(){
    var valor = inputTel.value
    inputTel.value = valor < 0 ? 0 : inputTel.value
}