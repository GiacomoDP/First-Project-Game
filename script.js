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
let obstacleImgX = 1450
let obstacleImgY = 50 + Math.floor(Math.random() * (canvas.height - 100));
//let obstacleImgY = 100
let obstacleImgWidth = 40
let obstacleImgHeight = 40 
let obstacleSpeed = 5
let obstacleArray = []
let key 
let animationId

//IMAGES
const bgImg = new Image();
bgImg.src = "../images/background.jpg";

const playerImg = new Image();
playerImg.src ="../images/pikachu.png";

const obstacleImg = new Image();
obstacleImg.src ="../images/logo-dc.png"

//class Obstacle {
  //  constructor() {
    //    this.width = obstacleImgWidth;
      //  this.speed = obstacleSpeed
    //}

//}


//FUNCTIONS
function pikachuMovement (event) {
    if (event.key === "ArrowRight" && playerImgX <= 1375 ) {
        playerImgX = playerImgX + pikachuSpeedValue
    } else if (event.key === "ArrowLeft" && playerImgX >= 10) {
        playerImgX = playerImgX - pikachuSpeedValue
}
 if (event.key === "ArrowDown" && playerImgY <= 575 ) {
     playerImgY = playerImgY + pikachuSpeedValue
 } else if (event.key === "ArrowUp" && playerImgY >= -5 ) {
     playerImgY = playerImgY - pikachuSpeedValue
 }
}

function obstacle () {
if (animationId % 100 === 0) {
    var dynamicPosY= 50 + Math.floor(Math.random() * (canvas.height - 100));
    obstacleArray.push([obstacleImg, obstacleImgX, dynamicPosY, obstacleImgWidth, obstacleImgHeight])
} 
}
function drawObstacle () {
obstacleArray.forEach(element => {
    ctx.drawImage(element[0], element[1], element[2], element[3], element[4])
    element[1] = element[1] - obstacleSpeed
});
}
function animate () {
    console.log("fdssssssss")
    ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight)
    ctx.drawImage(playerImg, playerImgX, playerImgY, playerImgWidth, playerImgHeight)
    obstacle();
    //pikachuMovement(key);
    drawObstacle ();
    animationId = requestAnimationFrame(animate)


}



function startGame () {
 
 startScreen.style.display = "none";
 canvas.style.display = "block";

// draw canvas
//ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight)


// draw pikachu
//ctx.drawImage(playerImg, playerImgX, playerImgY, playerImgWidth, playerImgHeight)

//draw obstacle
//ctx.drawImage(obstacleImg, obstacleImgX, obstacleImgY, obstacleImgWidth, obstacleImgHeight)

//ctx.fillRect(playerImgX, playerImgY, playerImgWidth, playerImgHeight)
//pikachuInCanvas();


if (gameOver) {
    cancelAnimationFrame(intervalId)
} else {
     requestAnimationFrame(animate)
}
}



// ADDEVENTLISTENERS
window.addEventListener("load", ()=>{
    canvas.style.display = "none";
    endGame.style.display = "none";

    startBtn.addEventListener("click", () =>{
        startGame();
    
    })
    window.addEventListener("keydown", (key) => {pikachuMovement(key)})

    //key = document.addEventListener("keydown", pikachuMovement)
    console.log({key})
})

