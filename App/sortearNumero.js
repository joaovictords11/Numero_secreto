const elementoMenorValor = document.querySelector('#menor-valor')
const menorValor = 1

const elementoMaiorValor = document.querySelector('#maior-valor')
const maiorValor = 100

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * (maiorValor + 1))
}

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

console.log("Número secreto: ", numeroSecreto)