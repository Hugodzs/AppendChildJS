let newtitulo = document.createElement("h1")

newtitulo.innerText = "Jogo Digitais"
newtitulo.id = "titulo"

const mainTitulo = document.querySelector("#content")

mainTitulo.appendChild(newtitulo)

let newGame = document.createElement("div")

newGame.id = "game1"

newGame.innerHTML =`
<h2>Super Mario</h2>
<img src= "https://www.mobygames.com/images/covers/l/497218-super-mario-world-new-nintendo-3ds-front-cover.jpg" width = "300"></img>
<p>Jogo Clássico que todo mundo já conhece!!</p>
<p><strong>PREÇO</strong>: R$ 20 </p>
<h3>SUPER RECOMENDADO PELA COMUNIDADE</h3>
`
mainTitulo.appendChild(newGame)

                    

