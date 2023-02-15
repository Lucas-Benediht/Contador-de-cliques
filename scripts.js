let contador = 0
let resultado = document.querySelector('section#result')
function contar(){
    contador ++ // Estou dizendo que o contador é igual contador +1
    resultado.innerHTML = `<p>O contador está com: <mark>${contador}</mark> cliques.</p>`
}
function zerar(){
    contador = 0
    resultado.innerHTML = null
