$(document).ready(function(){
   
   
    console.log('hello from controller');
    view = new View();
    player = new Player(view.canvas.width, view.canvas.height);
    monsters = [];
    monsters[0] = new Monster(view.canvas.width, view.canvas.height, 1);

    
    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

  
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    document.addEventListener("click", mouseLeftClickHandler, false);
  
    window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

    function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
        else if(e.key == "Up" || e.key == "ArrowUp") {
          upPressed = true;
        }
        else if(e.key == "Down" || e.key == "ArrowDown") {
         downPressed = true;
       }
       console.log(upPressed, rightPressed, downPressed, leftPressed);
    }
  
    function keyUpHandler(e) {
        if(e.click == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
        else if(e.key == "Up" || e.key == "ArrowUp") {
          upPressed = false;
        }
        else if(e.key == "Down" || e.key == "ArrowDown") {
         downPressed = false;
       }
    }
  
    function mouseMoveHandler(e) {
    }
  
    function mouseLeftClickHandler(e) {
    }
    

    function drawLives() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }
  
    function draw() {
      view.ctx.clearRect(0, 0, view.canvas.width, view.canvas.height);
      player.move(upPressed, rightPressed, downPressed, leftPressed, monsters);
      view.drawPlayer(player);
      view.drawMonster(monsters);
      view.drawScore();
      requestAnimationFrame(draw);
    }
  
    draw();
  });