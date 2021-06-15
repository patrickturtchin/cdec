let listaFrutas = ['melancia','morango','uva', 'tomate']
let listaPizzas = ['catupiry', 'alho', 'parmesao']

function removeFirstAndAddBanana (lista) {
  lista.shift()
  lista.push('banana')
  return lista
}

console.log (removeFirstAndAddBanana(listaFrutas))
console.log (removeFirstAndAddBanana(listaPizzas))

