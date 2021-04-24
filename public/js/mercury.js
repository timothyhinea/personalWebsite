$(document).ready(function(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var health = 10;
var paddleHeight = canvas.height/20;
var paddleWidth = canvas.width/ 5;
var paddleX = (canvas.width/2)- paddleWidth;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var powerUp = 0;

var shots = [];
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1, health: health };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("click", mouseLeftClickHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.click == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function mouseLeftClickHandler(e) {
  if(powerUp === 0)
    shots.push({x:paddleX+(paddleWidth/2), y:canvas.height - 10, dx: -4, dy: 4});
  else{
    shots.push({x:paddleX+(paddleWidth/2), y:canvas.height - 10, dx: 4, dy: -4});
    shots.push({x:paddleX+(paddleWidth/2), y:canvas.height - 10, dx: -4, dy: 4});
    shots.push({x:paddleX+(paddleWidth/2), y:canvas.height - 10, dx: 0, dy: 4});
  }
  lives = shots.length;
}

function collisionDetection() {
  for(var i = 0; i < shots.length; i++){
    for(var c=0; c<brickColumnCount; c++) {
      for(var r=0; r<brickRowCount; r++) {
        var b = bricks[c][r];
        if(b.status == 1) {
          if(shots[i].x > b.x && shots[i].x < b.x+brickWidth && shots[i].y > b.y && shots[i].y < b.y+brickHeight) {
            if(b.health === 0){
              b.status = 0;
            }
            else
            {
              b.health--;
            }
            console.log(b.health);
            score++;
            shots[i].dy = -shots[i].dy;
            if(score == brickRowCount*brickColumnCount*(health+1)) {
              alert("YOU WIN, CONGRATS!");
              document.location.reload();
            } 
            else if(score >(brickRowCount*brickColumnCount*(health+1)/10))
            {
              powerUp = 1;
            }
            return;
          }
        }
      }
    }
  }
}

function drawBall() {
    for(var i = 0; i < shots.length; i++){
      ctx.beginPath();
      ctx.arc(shots[i].x, shots[i].y, ballRadius, 0, Math.PI*2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        switch(bricks[c][r].health) {
          case 9:
            ctx.fillStyle = "#0095DD";
          break;
          case 8:
            ctx.fillStyle = "#0058dd";
          break;
          case 7:
            ctx.fillStyle = "#0007dd";
          break;
          case 6:
            ctx.fillStyle = "#4a00dd";
          break;
          case 5:
            ctx.fillStyle = "#6f00dd";
          break;
          case 4:
            ctx.fillStyle = "#a600dd";
          break;
          case 3:
            ctx.fillStyle = "#dd00ce";
          break;
          case 2:
            ctx.fillStyle = "#dd007d";
          break;
          case 1:
            ctx.fillStyle = "#dd003b";
          break;
          case 0:
            ctx.fillStyle = "#dd1a00";
          break;
          default:
          ctx.fillStyle = "#00cedd";
        }
        
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  for(var i = 0; i < shots.length; i++){
    if(shots[i].x + shots[i].dx > canvas.width-ballRadius || shots[i].x + shots[i].dx < ballRadius) {
      shots[i].dx = -shots[i].dx;
    }
    if(shots[i].y + shots[i].dy < ballRadius) {
      shots[i].dy = -shots[i].dy;
    }
    else if(shots[i].y + shots[i].dy > canvas.height-ballRadius) {
      if(shots[i].x > paddleX && shots[i].x < paddleX + paddleWidth) {
        shots[i].dy = -shots[i].dy;
      }
      else {
        shots.splice(i, 1);
        lives = shots.length;
      
        if(!lives) {
          alert("GAME OVER");
          document.location.reload();
        }
        continue;
      }
    }
    
  
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
      paddleX -= 7;
    }
  
    shots[i].x += shots[i].dx;
   shots[i].y += shots[i].dy;
}
  requestAnimationFrame(draw);
}

draw();
});