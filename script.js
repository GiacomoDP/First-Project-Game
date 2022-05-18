//draw CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//GET ELEMENTS FROM OUT HTML
const startBtn = document.getElementById("start-btn")
const startScreen = document.getElementById("start")
const gameBoard = document.getElementById("game-board")
const endGame = document.getElementById("end-game")
const restartBtn = document.getElementById("restart-btn")

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

//let obstacleImgY = 100
let obstacleImgWidth = 40
let obstacleImgHeight = 40 
let obstacleSpeed = 5
let obstacleArray = []
let key 
let animationId
///let dynamicPosY= 50 + Math.floor(Math.random() * (canvas.height - 100));

//IMAGES
const bgImg = new Image();
bgImg.src = "../images/background.jpg";

const playerImg = new Image();
playerImg.src ="../images/pikachu.png";

const obstacleImg = new Image();
obstacleImg.src ="../images/logo-dc.png";




//class Obstacle {
  //  constructor() {
    //    this.width = obstacleImgWidth;
      //  this.speed = obstacleSpeed
    //}

//}
//Class Obstacle

class infObstacle {
    constructor() {
        this.width = obstacleImgWidth
        this.height = obstacleImgHeight
        this.xPos = obstacleImgX
        this.obSpeed = obstacleSpeed
        this.yPos = dynamicPosY
    }
}

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

let dcArray = [
    {img:obstacleImg, x:obstacleImgX, y:300, width:obstacleImgWidth , height:obstacleImgHeight},
    {img:obstacleImg, x:obstacleImgX, y:400, width:obstacleImgWidth , height:obstacleImgHeight},
    {img:obstacleImg, x:obstacleImgX, y:500, width:obstacleImgWidth , height:obstacleImgHeight},
    {img:obstacleImg, x:obstacleImgX, y:200, width:obstacleImgWidth , height:obstacleImgHeight},
]

function drawObstacle () {
    for (let i = 0 ; i < dcArray.length ; i++) {
        ctx.drawImage (dcArray[i].img, dcArray[i].x, dcArray[i].y, dcArray[i].width, dcArray[i].height)
        dcArray[i].x -= obstacleSpeed
    

        if (playerImgX < dcArray[i].x + dcArray[i].width &&
            playerImgX + playerImgWidth > dcArray[i].x &&
            playerImgY < dcArray[i].y + dcArray[i].height &&
            playerImgHeight + playerImgY > dcArray[i].y) {
            gameOver = true
            canvas.style.display = "none";
            endGame.style.display = "block";
        console.log("collision")
    
}
    }
}

function restart () {
    canvas.style.display = "block";
    endGame.style.display = "none";
    gameOver = false
    dcArray = [
        {img:obstacleImg, x:obstacleImgX, y:300, width:obstacleImgWidth , height:obstacleImgHeight},
        {img:obstacleImg, x:obstacleImgX, y:400, width:obstacleImgWidth , height:obstacleImgHeight},
        {img:obstacleImg, x:obstacleImgX, y:500, width:obstacleImgWidth , height:obstacleImgHeight},
        {img:obstacleImg, x:obstacleImgX, y:200, width:obstacleImgWidth , height:obstacleImgHeight},
    ]
}





//function obstacle () {

  //  let dynamicPosY = 50 + Math.floor(Math.random() * (canvas.height - 100));
//if (animationId % 100 === 0) {
    //console.log(obstacleArray)
  //  obstacleArray.push([obstacleImg, obstacleImgX, dynamicPosY, obstacleImgWidth, obstacleImgHeight])
//} 

//}
//function drawObstacle () {
///obstacleArray.forEach(element => {
   // ctx.drawImage(element[0], element[1], element[2], element[3], element[4])
    //element[1] = element[1] - obstacleSpeed
//});
//}
function animate () {
    ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight)
    ctx.drawImage(playerImg, playerImgX, playerImgY, playerImgWidth, playerImgHeight)
    //obstacle();
    //pikachuMovement(key);
    drawObstacle();

  
    animationId = requestAnimationFrame(animate)
    

}

function collisionDC () {


    
    //if (playerImgX < this.xPos + this.width &&
      //  playerImgX + playerImgWidth > this.xPos &&
        //playerImgY < this.yPos + this.height &&
        //playerImgHeight + playerImgY > this.yPos) {
         //console.log("fdsf")

         
     //}
  // if (playerImgX < obstacleImgX + obstacleImgWidth &&
   //     playerImgX + playerImgWidth > obstacleImgX)
   //      {
     //       console.log("collitionDC")
     //       gameOver = false
     //   }
       
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
    restartBtn.addEventListener("click", () =>{
        restart();
    })
})



//window.addEventListener("DOMContentLoaded", event => {
  //  const audio = document.querySelector("audio");
    //audio.volume = 0.2;
    //audio.play();
  //}); 

