//draw CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//GET ELEMENTS FROM OUT HTML
const startBtn = document.getElementById("start-btn")
const startScreen = document.getElementById("start")
const gameBoard = document.getElementById("game-board")
const endGame = document.getElementById("end-game")
const restartGame = document.getElementById("restart-btn")

//GLOBAL VARIBLES
const canvasWidth = 1500
const canvasHeight = 700
let gameOver = false
let intervalId = 0 
let playerImgX = 10
let playerImgY = 500
let playerImgWidth = 130
let playerImgHeight = 120
const pikachuSpeedValue = 15
let pikachuGoingLeft = false
let pikachuGoingRight = false 


//IMAGES
const bgImg = new Image();
bgImg.src = "../images/background.jpg";

const playerImg = new Image();
playerImg.src ="../images/pikachu.png";


//FUNCTIONS
function pikachuMovement (event) {
    if (event.key === "ArrowRight" ) {
        playerImgX = playerImgX + pikachuSpeedValue
    } else if (event.key === "ArrowLeft") {
        playerImgX = playerImgX - pikachuSpeedValue
}


    
    
    
    
    
    
    
    
    //if (pikachuGoingLeft) {
      //  if (playerImgX > 0) {
    //playerImgX -= pikachuSpeedValue;
      //  }
    //} else if (pikachuGoingRight) {
      //  if (playerImgX < canvasWidth - playerImgWidth) {
        //    playerImgX += pikachuSpeedValue;
        //}
    //}
}




function startGame () {
 
 startScreen.style.display = "none";
 canvas.style.display = "block";

// draw canvas
ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight)


// draw pikachu
ctx.drawImage(playerImg, playerImgX, playerImgY, playerImgWidth, playerImgHeight)
//ctx.fillRect(playerImgX, playerImgY, playerImgWidth, playerImgHeight)



if (gameOver) {
    cancelAnimationFrame(intervalId)
} else {
    animationId = requestAnimationFrame(startGame)
}
}



// ADDEVENTLISTENERS
window.addEventListener("load", ()=>{
    canvas.style.display = "none";
    endGame.style.display = "none";

    startBtn.addEventListener("click", () =>{
        startGame();
    
    })

    document.addEventListener("keydown", pikachuMovement)
})

