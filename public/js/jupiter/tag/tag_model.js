class Engine{
    constructor(view)
    {
        this.player = new Player(view.canvas.width, view.canvas.height);
        this.monsters = [];
        this.projectiles = [];
        this.score = 0;
        this.spawnMonsters();

    
    }

    run(controlls){
        var monsterKilled = this.player.move(controlls, this.monsters);
        this.spawnProjectiles(this.player.attr,controlls);
        
        //console.log(this.projectiles.length);
        this.projectiles.forEach(projectile=>{
            projectile.move();
        })
        this.monsters.forEach(monster =>{
            monster.move();
        })

        //console.log(monsterKilled);
        if(monsterKilled != -1)
            this.killMonster(monsterKilled);

        if(this.monsters.length === 0)
        {
            this.spawnMonsters();
        }
    }

    spawnMonsters(){
        for(var i = 0; i < 5; i++)
        {
            this.monsters[i] = new Monster(view.canvas.width, view.canvas.height, i);
        }
    }

    killMonster(monster){
        this.score++;
        this.monsters.splice(monster,1);
    }

    spawnProjectiles(attr, controlls){
        this.projectiles.push(new projectile(attr.x, attr.y, controlls.mouseX, controlls.mouseY, attr.dmg, attr.velocity));
    }

    killProjectiles(projectile){
        this.projectiles.splice(projectile,1);
    }
}

class Player{
    constructor(canvasWidth, canvasHeight){
        
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.attr = {width: canvasHeight/10, 
            height: canvasHeight/10, 
            x: Math.floor(canvasWidth/2),
            y: Math.floor(canvasHeight/2),
            velocity: Math.floor(canvasHeight/100),
            color: "#00A36C",
            hp: 10,
            attack: 1};
        console.log("hello from Player!");
    }
     colisionDetect(e){
        var a = -1;
        e.forEach((monster, index) =>{
            if (monster.x < this.attr.x + this.attr.width &&
                monster.x + monster.width > this.attr.x &&
                monster.y < this.attr.y + this.attr.height &&
                monster.y + monster.height > this.attr.y) {
                a = index;
             }

        });
        return a;
    }
    move(controlls, monsters){
        var b = this.colisionDetect(monsters);
        
        if(controlls.up)
            if(this.attr.y > 0)
                this.attr.y = this.attr.y - this.attr.velocity;

               
        if(controlls.right)
            if(this.attr.x < this.canvasWidth - this.attr.width) 
                this.attr.x = this.attr.x + this.attr.velocity

        
        if(controlls.down)
            if(this.attr.y < this.canvasHeight - this.attr.height)
                this.attr.y = this.attr.y + this.attr.velocity;


        if(controlls.left)
            if(this.attr.x > 0)
                this.attr.x = this.attr.x - this.attr.velocity;

        return b;
    }

    levelUp(){
        this.attr.attack = this.attr.attack +=2 ;
    }

    respawn(){
        this.attr.x = Math.floor(this.canvasWidth/2);
        this.attr.y = Math.floor(this.canvasHeight/2);
        this.attr.velocity = Math.floor(this.canvasHeight/100);
        this.attr.color = "#00A36C";
        this.attr.hp = 10;
        this.attr.attack = 1;
    }

}

class Monster{
    constructor(canvasWidth, canvasHeight, id){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.width = canvasHeight/10;
        this.height = canvasHeight/10;
        this.x = Math.floor(canvasWidth/10);
        this.y = Math.floor(canvasHeight/2);
        this.velocity = Math.floor(canvasHeight/100);
        this.id = id;
        this.hp = 10;
        this.attack = 1;
        //console.log("hello from Monster!");
        this.vector = {up: false, right: false, down: false, left: false}
    }

    move(up, right, down, left, monsters){
        if(this.hp%25 == 0)
            var a = Math.floor(Math.random()* 4)+ 1;
        this.hp++;
        if(a == 1){
            this.vector = {up: false, right: false, down: false, left: false};
            this.vector.up = true;
        }
        if(a == 2){
            this.vector = {up: false, right: false, down: false, left: false};
            this.vector.right = true;
        }
        if(a == 3){ 
            this.vector = {up: false, right: false, down: false, left: false};
            this.vector.down = true;
        }
        if(a == 4){
            this.vector = {up: false, right: false, down: false, left: false}
            this.vector.left = true;
        }
        if(this.vector.up)
            if(this.y > 0)
                this.y = this.y - this.velocity;

               
        if(this.vector.right)
            if(this.x < this.canvasWidth - this.width) 
                this.x = this.x + this.velocity

        
        if(this.vector.down)
            if(this.y < this.canvasHeight - this.height)
                this.y = this.y + this.velocity;


        if(this.vector.left)
            if(this.x > 0)
                this.x = this.x - this.velocity;
    }

}

class projectile {
    constructor(x, y, mouseX,mouseY, dmg, velocity)
    {
        this.dmg = dmg;
        this.x = x;
        this.y = y;
        this.directionX = mouseX;
        this.directionY = mouseY;
        this.velocity = velocity;
        this.slope = (this.directionY- this.y)/(this.directionX-this.x);
        this.xVel = (this.directionX-this.x);
        this.yVel = (this.directionY- this.y);
        this.r = 5;

    }

    move(){
        this.x = this.x + this.xVel;
        this.y = this.y + this.yVel;
    }

    colisionDetect(){

    }
}