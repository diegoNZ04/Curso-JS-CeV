let num = [5, 8, 2] // array

num[3] = 6 // adicionar valor em indice x

num.push(7) // adiconar valor na ultima posição

console.log(`Nosso vetor é o ${num}`) // mostrar vetor
 
console.log(`O tamanho do índice é ${num.length}`) // ler tamanho do vetor

console.log(`Os números organizados são: ${num.sort()}`) // organizar em ordem crescente


/*
for (let pos=0; pos < num.length; pos++) { //mostrar posição e valor respectivo
    console.log(`Indice ${pos}, Número ${num[pos]}`)
}


for(let pos in num) { // mostrar apenas valor
    console.log(num[pos])
}
*/

console.log(`Número 7 na posição ${num.indexOf(7)}`)

console.log(`Número 3 na posição ${num.indexOf(3)}`)
if (num.indexOf(3) == -1){
    console.log(`Não existe`)
}
