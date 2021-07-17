class View{
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d"); 
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPlayer(player) {
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

    drawScore(score) {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: "+ score, 8, 20);
      }
    drawProjectiles(projectiles){
        projectiles.forEach(projectile =>{
            this.ctx.beginPath();
            this.ctx.arc(projectile.x, projectile.y, projectile.r, 0, Math.PI*2);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
        })
    }

}
