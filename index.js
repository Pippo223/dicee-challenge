let randomNumber1 = Math.random()
let randomNumber2 = Math.random()

let img1 = document.getElementsByClassName("img1")[0]
let img2 = document.getElementsByClassName("img2")[0]

function getRndInteger1(min, max) {
    return Math.floor(randomNumber1 * (max - min)) + min;
  }

  function getRndInteger2(min, max) {
    return Math.floor(randomNumber2 * (max - min)) + min;
  }

   switch (getRndInteger1(1,7)) {
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

 switch (getRndInteger2(1,7)) {
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

if (getRndInteger1(1,7) > getRndInteger2(1,7)) {
        document.querySelector("h1").innerHTML = "Player 1 wins"
    }

    else if (getRndInteger1(1,7) < getRndInteger2(1,7)) {
        document.querySelector("h1").innerHTML = "Player 2 wins"
    }

    else {
        document.querySelector("h1").innerHTML = "Draw"
    }
