class View{
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d"); 
    }

    drawPlayer(player) {
        console.log(player.x,player.y,player.width,player.height);
        this.ctx.beginPath();
        this.ctx.rect(player.x, player.y, player.width, player.height);
        this.ctx.fillStyle = player.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawMonster(monsters) {
        monsters.forEach(monster =>{
            this.ctx.beginPath();
            this.ctx.rect(monster.x, monster.y, monster.width, monster.height);
            this.ctx.fillStyle = "#C04000";
            this.ctx.fill();
            this.ctx.closePath();
        });

    }

    drawScore() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: ", 8, 20);
      }

}
