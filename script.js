//draw CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//GET ELEMENTS FROM OUT HTML
const startBtn = document.getElementById("start-btn")
const startScreen = document.getElementById("start")
const gameBoard = document.getElementById("game-board")
const endGame = document.getElementById("end-game")
const restartBtn = document.getElementById("restart-btn")
const getScore = document.getElementById("score")
//GLOBAL VARIBLES
const canvasWidth = 1500
const canvasHeight = 700
let gameOver = false
let intervalId = 0 
let playerImgX = 10
let playerImgY = 500
let playerImgWidth = 130
let playerImgHeight = 120
let pikachuSpeedValue = 15
let pikachuGoingLeft = false
let pikachuGoingRight = false 
let obstacleImgX = 1450
let score = 0
let obstacleImgWidth = 40
let obstacleImgHeight = 40 
let obstacleSpeed = 5
let obstacleArray = []
let pizzaImgWidth = 70
let pizzaImgHeigth = 80

///let dynamicPosY= 50 + Math.floor(Math.random() * (canvas.height - 100));

//IMAGES
const bgImg = new Image();
bgImg.src = "./images/background.jpg";

const playerImg = new Image();
playerImg.src ="./images/pikachu.png";

const obstacleImg = new Image();
obstacleImg.src ="./images/logo-dc.png";

const pizzaImg = new Image();
pizzaImg.src="./images/pizza.png"

const finalImg = new Image();
finalImg.src ="./images/pikachu-triste.png"

//SOUND

const bgAudio = new Audio();
bgAudio.src ="./sound/101-opening.mp3"
bgAudio.volume = 0.2


//FUNCTIONS
function pikachuMovement (event) {
    
    if (event.key === "ArrowRight" && playerImgX <= 1375 ) {
        playerImgX = playerImgX + pikachuSpeedValue
    } else if (event.key === "ArrowLeft" && playerImgX >= 10) {
        playerImgX = playerImgX - pikachuSpeedValue
}
console.log("movementrightleft")
 if (event.key === "ArrowDown" && playerImgY <= 575 ) {
     playerImgY = playerImgY + pikachuSpeedValue
 } else if (event.key === "ArrowUp" && playerImgY >= -5 ) {
     playerImgY = playerImgY - pikachuSpeedValue
 }
 console.log("movementupdown")
}

let pizzaArray = [
    {img:pizzaImg, x: 400 , y:100, width:pizzaImgWidth , height:pizzaImgHeigth},
    {img:pizzaImg, x: 700, y:250, width:pizzaImgWidth , height:pizzaImgHeigth},
    {img:pizzaImg, x: 600, y:600, width:pizzaImgWidth , height:pizzaImgHeigth},
    {img:pizzaImg, x: 800, y:300, width:pizzaImgWidth , height:pizzaImgHeigth},
]

function drawPizza () {
    for (let i = 0 ; i < pizzaArray.length ; i++) {
        ctx.drawImage (pizzaArray[i].img, pizzaArray[i].x, pizzaArray[i].y, pizzaArray[i].width, pizzaArray[i].height)
        pizzaArray[i].x -= obstacleSpeed + 2

        if(pizzaArray[i].x < 0) {
            pizzaArray[i].x = 1800
        }
    
            if (playerImgX < pizzaArray[i].x + pizzaArray[i].width &&
                playerImgX + playerImgWidth > pizzaArray[i].x &&
                playerImgY < pizzaArray[i].y + pizzaArray[i].height &&
                playerImgHeight + playerImgY > pizzaArray[i].y) {
               pizzaArray[i].x = 1800
                score = score + 10
                getScore.innerHTML = `Score: ${score}`
            console.log("pizza"+ score)
        
    }
        }
    }




let dcArray = [
    {img:obstacleImg, x: 1500, y:300, width:obstacleImgWidth , height:obstacleImgHeight},
    {img:obstacleImg, x: 1600, y:400, width:obstacleImgWidth , height:obstacleImgHeight},
    {img:obstacleImg, x: 1700, y:500, width:obstacleImgWidth , height:obstacleImgHeight},
    {img:obstacleImg, x: 1750, y:200, width:obstacleImgWidth , height:obstacleImgHeight},
]

function drawObstacle () {
    for (let i = 0 ; i < dcArray.length ; i++) {
        ctx.drawImage (dcArray[i].img, dcArray[i].x, dcArray[i].y, dcArray[i].width, dcArray[i].height)
        dcArray[i].x -= obstacleSpeed
    if(dcArray[i].x < 0) {
        dcArray[i].x = 1800
    }

        if (playerImgX < dcArray[i].x + dcArray[i].width &&
            playerImgX + playerImgWidth > dcArray[i].x &&
            playerImgY < dcArray[i].y + dcArray[i].height &&
            playerImgHeight + playerImgY > dcArray[i].y) {
            gameOver = true
            canvas.style.display = "none";
            endGame.style.display = "block";
            score = 0
        console.log("collision")
    
}
    }
}

function restart () {
    canvas.style.display = "block";
    endGame.style.display = "none";
    ctx.drawImage(finalImg)
    gameOver = false
    dcArray = [
        {img:obstacleImg, x: 1500, y:300, width:obstacleImgWidth , height:obstacleImgHeight},
        {img:obstacleImg, x: 1600, y:400, width:obstacleImgWidth , height:obstacleImgHeight},
        {img:obstacleImg, x: 1700, y:500, width:obstacleImgWidth , height:obstacleImgHeight},
        {img:obstacleImg, x: 1750, y:200, width:obstacleImgWidth , height:obstacleImgHeight},
    ]
    
}

function animate () {
    ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight)
    ctx.drawImage(playerImg, playerImgX, playerImgY, playerImgWidth, playerImgHeight)
    ctx.font= "30px verdana"
    ctx.fillText(`score:${score}`, 30, 30)
    ctx.fillStyle= "green" 



   drawPizza();
   drawObstacle();
  
  
 intervalId = requestAnimationFrame(animate)


}

function startGame () {

 startScreen.style.display = "none";
 canvas.style.display = "block";
 bgAudio.play();
 if (gameOver) {
    cancelAnimationFrame(intervalId)
} else {
  intervalId =  requestAnimationFrame(animate)
}

}



// ADDEVENTLISTENERS
window.addEventListener("load", ()=>{
    canvas.style.display = "none";
    endGame.style.display = "none";

    startBtn.addEventListener("click", () =>{
        startGame();
    
    })
    restartBtn.addEventListener("click", () =>{
        restart();
    })
    document.addEventListener("keydown", pikachuMovement)
})



//window.addEventListener("DOMContentLoaded", event => {
  //  const audio = document.querySelector("audio");
    //audio.volume = 0.2;
    //audio.play();
  //}); 
