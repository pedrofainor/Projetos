const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// acessar indice que não existe não fera erro

valores[4]= 10 // alterar valor
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')// inserir elemento 
console.log(valores)

console.log(valores.pop())// tirar o atributo
delete valores[0]//deletar uma célula especifica
console.log(valores)

console.log(typeof valores)