var n1 = 12;
var n2 = 12;
const maior10 = 10;
const maior20 = 20;

function numerosIguais(n1, n2) {
    if (n1 === n2) {
        return "são iguais";
    } else {
        return "não são iguais";
    }
}

function soma(n1, n2) {
    return n1 + n2;
}

function verificarMaior (n1, n2, n3) {
    if (soma(n1, n2) > n3) {
        return "maior";
    } else {
        return "menor";
    }
}

console.log(`Os números ${n1} e ${n2} ${numerosIguais(n1,n2)}. Sua soma é ${soma(n1, n2)}, que é ${verificarMaior(n1, n2, maior10)} que ${maior10} e ${verificarMaior(n1, n2, maior20)} que ${maior20}.\n`)