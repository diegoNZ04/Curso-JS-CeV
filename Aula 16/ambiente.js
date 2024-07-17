function par_ou_impar(n) {
	if (n%2 == 0) {
		console.log('Par')
	} else {
		console.log('Impar')
	}
}

function soma(n1=0, n2=0) {
    return n1 + n2
}


let v = function(x) {
    return x*2
}


function fatorail(n) {
    let fat = 1
    for (let c=n; c > 1; c --) {
        fat *= c
    }
    return fat
}


function fatorial_recursiva(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial_recursiva(n-1)
    }
}

console.log(fatorial_recursiva(5))