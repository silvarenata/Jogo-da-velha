//const jogadorX = prompt ("Nome Jogador X")
//const jogadorO = prompt ("Nome Jogador O")

//const campojogadorX = document.querySelector(".jogadorX")
//campojogadorX.innerHTML += jogadorX

//const campojogadorO = document.querySelector(".jogadorO")
//campojogadorO.innerHTML += jogadorO

let vez = "X"

function jogar(id) {
   const casa = document.getElementById(id)
 
   if (vez === "X") {
        casa.innerHTML = "X"
        vez ="O"
    }
   else if (vez === "O") {
        casa.innerHTML = "O"
        vez = "X"
   }
}

const possibilidades = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

const 





//const resetButton = document.querySelector('#reset');