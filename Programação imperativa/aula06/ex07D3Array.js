const precoSemTaxa = [1200, 340, 560, 304000, 500, 7060, 400, 1000];
const taxa= 1.21;
let precoComTaxa= [];

function guardarPrecoComTaxa(precoSemTaxa) {
    for (let i = 0; i < precoSemTaxa.length; i++) {
        precoComTaxa.push(precoSemTaxa[i] * taxa);
    }
}

function mostrarPrecoComTaxa(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}