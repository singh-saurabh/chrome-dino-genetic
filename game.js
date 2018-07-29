var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dinoX = 20;
var dinoY = canvas.height - 60;
var jump = 0;
//jump 0 : not ; 1: up ; 2: down
var dy = -2;

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDino();
  if (jump == 1 && dinoY >= canvas.height - 120){
    dinoY +=dy;
  }
  else if (jump == 1 && dinoY < canvas.height - 120 ){
    jump = 2;
  }
  else if (jump == 2 && dinoY <= canvas.height - 60){
    dinoY -= dy;
  }
  else if (jump == 2 && dinoY >= canvas.height - 60) {
    jump = 0;
  }
  requestAnimationFrame(draw);
}

function drawDino() {
  ctx.beginPath();
  ctx.rect(dinoX, dinoY, 30, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}

function drawCactus() {
  
}

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e){
  if (e.keyCode == 32) {
    jumpDino();
  }
}

function jumpDino(){
  if (jump == 0){
    jump = 1;
  }

}
draw();
