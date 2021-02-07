function getGerarInteiroAleatorio(max, min) {
    const valor = Math.random() * (max - min) + max
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getGerarInteiroAleatorio(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('Até a proxima')