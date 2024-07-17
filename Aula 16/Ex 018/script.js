var lista = document.getElementById('selLista')
var numero = document.getElementById('txtn')
var resp = document.querySelector('div#resp')
var valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumero(numero.value) && !inLista(numero.value, valores)) {
       valores.push(Number(numero.value))
       var item = document.createElement('option')
       item.text = `Valor ${numero.value} adicionado.`
       lista.appendChild(item)
       resp.innerHTML = ''
    } else {
       window.alert('Valor inválido ou já encontrado na lista.')
    }
    txtn.value = '' // nome do objeto na var numero
    txtn.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para finalizar.')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        resp.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        resp.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        resp.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        resp.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }
}
