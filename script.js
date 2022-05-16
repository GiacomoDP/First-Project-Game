const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("start-btn")

const bgImg = new Image();
bgImg.src = "../images/background.jpg";

const playerImg = new Image();
playerImg.src ="../images/pikachu.png";

function startGame () {
    
}



startBtn.addEventListener("click", () =>{
    startGame();
});