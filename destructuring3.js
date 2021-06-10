function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min ) + min
}

const obj = { max: 50, min: 40}
console.logl(rand(ob))
console.log(rand({ min: 955}))
console.log(rand({}))
console.log(rand())