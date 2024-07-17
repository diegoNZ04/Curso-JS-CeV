function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // ano do formulário
    var msg = document.querySelector('div#msg')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute('src', 'criança_m.jpeg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem_m.jpeg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto_m.jpeg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso_h.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute('src', 'criança_f.jpeg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem_f.jpeg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto_f.jpeg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso_f.jpeg')
            }
        }
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
        msg.appendChild(img)
    }
}