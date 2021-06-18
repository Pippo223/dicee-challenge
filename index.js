
const startBtn = document.getElementById("start")
const startDiv = document.getElementById("start-div")
const rollBtn = document.getElementById("roll")
const quitBtn = document.getElementById("quit")
const confirm = document.getElementById("confirm-quit")
const span = document.getElementsByClassName("close2")[0]
let yes = document.getElementById("yes")
let no = document.getElementById("no")


let img1 = document.getElementsByClassName("img1")[0]
let img2 = document.getElementsByClassName("img2")[0]

function startGame() {
    loadDice()
    toggleButtons()
}

function rollDice() {
    loadDice()
}

function toggleButtons() {
    startDiv.style.display = "none"
    rollBtn.style.display = "block"
    quitBtn.style.display = "block"
}

function getRndInteger1(min, max) {
    let randomNumber1 = Math.random()
    return Math.floor(randomNumber1 * (max - min)) + min;
  }

  function getRndInteger2(min, max) {
    let randomNumber2 = Math.random()
    return Math.floor(randomNumber2 * (max - min)) + min;
  }

  function loadDice() {
    let temp1 = getRndInteger1(1, 7)
    let temp2 = getRndInteger2(1, 7)

    switch (temp1) {
       case 1: img1.setAttribute("src","images/dice1.png") 
       break;
       case 2: img1.setAttribute("src","images/dice2.png")
       break;
       case 3: img1.setAttribute("src","images/dice3.png")
       break;
       case 4: img1.setAttribute("src","images/dice4.png")
       break;
       case 5: img1.setAttribute("src","images/dice5.png")
       break;
       default: img1.setAttribute("src","images/dice6.png")
 } 

 switch (temp2) {
    case 1: img2.setAttribute("src","images/dice1.png") 
    break;
    case 2: img2.setAttribute("src","images/dice2.png")
    break;
    case 3: img2.setAttribute("src","images/dice3.png")
    break;
    case 4: img2.setAttribute("src","images/dice4.png")
    break;
    case 5: img2.setAttribute("src","images/dice5.png")
    break;
    default: img2.setAttribute("src","images/dice6.png")
    } 

    if (temp1 > temp2) {
        document.querySelector("h1").innerHTML = "Player 1 wins"
    }

    else if (temp1 < temp2) {
        document.querySelector("h1").innerHTML = "Player 2 wins"
    }

    else {
        document.querySelector("h1").innerHTML = "Draw"
    }
}

function confirmQuit() {
    confirm.style.display = "block"
}

function backToStart() {
    location.reload()
}

function backToGame() {
    confirm.style.display = "none"
}


startBtn.addEventListener("click", startGame)
rollBtn.addEventListener("click", rollDice)
quitBtn.addEventListener("click", confirmQuit)
yes.addEventListener("click", backToStart)
no.addEventListener("click", backToGame)
span.addEventListener("click", backToGame)

