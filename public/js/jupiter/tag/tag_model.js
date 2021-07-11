class Player{
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.width = canvasHeight/10;
        this.height = canvasHeight/10;
        this.x = Math.floor(canvasWidth/2);
        this.y = Math.floor(canvasHeight/2);
        this.velocity = Math.floor(canvasHeight/100);
        this.color = "#00A36C";
        this.hp = 10;
        this.attack = 1;
        console.log("hello from Player!");
    }
     colisionDetect(monsters){
        monsters.forEach(monster =>{
            if(monster.x  > this.x + this.width){
                this.color = "#E30B5C";
            }
            else{
                this.color = "#00A36C";
            }
        });
    }
    move(up, right, down, left, monsters){

        this.colisionDetect(monsters)
        
        if(up)
            if(this.y > 0)
                this.y = this.y - this.velocity;

               
        if(right)
            if(this.x < this.canvasWidth - this.width) 
                this.x = this.x + this.velocity

        
        if(down)
            if(this.y < this.canvasHeight - this.height)
                this.y = this.y + this.velocity;


        if(left)
            if(this.x > 0)
                this.x = this.x - this.velocity;
    }

    levelUp(){
        this.attack = this.attack +=2 ;
    }

}


class Monster{
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.width = canvasHeight/10;
        this.height = canvasHeight/10;
        this.x = Math.floor(canvasWidth/10);
        this.y = Math.floor(canvasHeight/2);
        this.velocity = Math.floor(canvasHeight/100);
        this.hp = 10;
        this.attack = 1;
        console.log("hello from Monster!");
    }
}