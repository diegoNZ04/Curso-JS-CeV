function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'manha_logo.png'
        document.body.style.background = '#fed33c'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde_logo.png'
        document.body.style.background = '#dc6813'
    } else {
        // BOA NOITE
        img.src = 'noite_logo.png'
        document.body.style.background = '#2b3946'
    }
}

