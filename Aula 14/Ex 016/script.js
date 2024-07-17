
function verificar() { 
    let inicio = document.getElementById('iniciotxt') // let não sai do escopo do bloco
    let fim = document.getElementById('fimtxt')
    let passo = document.getElementById('passotxt')
    let resp = document.getElementById('resp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resp.innerHTML = 'Impossível Contar!'
        //window.alert('[ERRO] Faltam dados!')
        
    } else {
        resp.innerHTML = `Contando: <br>`

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo Inválido!Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c=i; c<=f; c+=p) {
                resp.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for(let c=i; c>=f; c-=p) {
                resp.innerHTML += `${c} \u{1F449}`
            }
        }
        

        resp.innerHTML += `FIM \u{1F47E}!`
    }
}