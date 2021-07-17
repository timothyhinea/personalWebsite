$(document).ready(function(){
   
   
    console.log('hello from controller');
    view = new View();
    engine = new Engine(view);

    

    var controlls = {up: false, 
                      right: false, 
                      down: false, 
                      left: false, 
                      mouseX: false, 
                      mouseY: false}
  
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
        if(e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 68) {
            controlls.right = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 65) {
          controlls.left = true;
        }
        else if(e.key == "Up" || e.key == "ArrowUp" || e.keyCode == 87) {
          controlls.up = true;
        }
        else if(e.key == "Down" || e.key == "ArrowDown" || e.keyCode == 83) {
          controlls.down = true;
       }
    }
  
    function keyUpHandler(e) {
        if(e.click == "Right" || e.key == "ArrowRight" || e.keyCode == 68) {
          controlls.right = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 65) {
          controlls.left = false;
        }
        else if(e.key == "Up" || e.key == "ArrowUp" || e.keyCode == 87) {
          controlls.up = false;
        }
        else if(e.key == "Down" || e.key == "ArrowDown" || e.keyCode == 83) {
          controlls.down = false;
       }
    }
  
    function mouseMoveHandler(e) {
    }
  
    function mouseLeftClickHandler(e) {
      controlls.mouseX = e.layerX;
      controlls.mouseY = e.layerY;
    }
    
    function drawLives() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }
  
    function draw() {

      view.ctx.clearRect(0, 0, view.canvas.width, view.canvas.height);
      engine.run(controlls);
      view.drawPlayer(engine.player.attr);
      view.drawMonster(engine.monsters);
      view.drawScore(engine.score);
      view.drawProjectiles(engine.projectiles);
      requestAnimationFrame(draw);
    }
  
    draw();
  });