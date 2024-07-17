/* - Repetições com teste lógico no início

var c = 1
while (c <= 6) {
    console.log(`Passo: ${c}`)
    c++ 
} 



- Repetições com teste lógico no final

var c = 1
do {
    console.log(`Passo: ${c}`)
    c++
} while (c <= 6)
 



- **Repetições com variável de controle**

for (c=1; c<=6; c++) {
    console.log(`Passo: ${c}`)
}


console.log('Vai começar...')
for (c=1; c<=6; c++) {
    console.log(`Passo: ${c}`)
}
console.log('Fim') */

var inicio = 5
var fim = 12
var passo = 2

for (c=inicio; c<=fim; c+=passo) {
    console.log(c)
}