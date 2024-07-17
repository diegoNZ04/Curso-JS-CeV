function calcular() {
    var numero = document.getElementById('numbertxt')
    var resp = document.getElementById('selTab')

    if (numero.value.lenght == 0) {
        window.alert('Por favor digite um número!')
    } else {
        var n = Number(numero.value)
        resp.innerHTML = ``
        for (c=1; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            item.value = `resp${c}`
            resp.appendChild(item)
        }
    }
    

    
     
    

}
