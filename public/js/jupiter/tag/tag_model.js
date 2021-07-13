class Engine{
    constructor(view)
    {
        this.player = new Player(view.canvas.width, view.canvas.height);
        this.monsters = [];
        this.score = 0;
        this.spawnMonsters();

    
    }

    run(up, right, down, left){
        var monsterKilled = this.player.move(up, right, down, left, this.monsters);
        this.monsters.forEach(monster =>{
            monster.move();
        })
        if(monsterKilled != -1)
            this.killMonster(monsterKilled);

        if(this.monsters.length === 0)
        {
            this.spawnMonsters();
        }
    }

    spawnMonsters(){
        for(var i = 0; i < 20; i++)
        {
            this.monsters[i] = new Monster(view.canvas.width, view.canvas.height, i);
        }
    }

    killMonster(monster){
        this.score++;
        this.monsters.splice(monster,1);
    }
}


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
     colisionDetect(e){
        var a = {up: true, right:true, down: true, left: true, monster: -1};
        e.monsters.forEach((monster, index) =>{

            if (monster.x < this.x + this.width &&
                monster.x + monster.width > this.x &&
                monster.y < this.y + this.height &&
                monster.y + monster.height > this.y) {
                a.monster = index;
                
             }

        });
        return a;
    }
    move(up, right, down, left, monsters){
        var a = {up: up, right: right, down: down, left: left, monsters: monsters};
        var b = this.colisionDetect(a);
        
        if(up && b.up)
            if(this.y > 0)
                this.y = this.y - this.velocity;

               
        if(right&& b.right)
            if(this.x < this.canvasWidth - this.width) 
                this.x = this.x + this.velocity

        
        if(down && b.down)
            if(this.y < this.canvasHeight - this.height)
                this.y = this.y + this.velocity;


        if(left && b.left)
            if(this.x > 0)
                this.x = this.x - this.velocity;

        return b.monster;
    }

    levelUp(){
        this.attack = this.attack +=2 ;
    }

    respawn(){
        this.x = Math.floor(this.canvasWidth/2);
        this.y = Math.floor(this.canvasHeight/2);
        this.velocity = Math.floor(this.canvasHeight/100);
        this.color = "#00A36C";
        this.hp = 10;
        this.attack = 1;
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
        console.log("hello from Monster!");
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
    constructor(x, y, direction, dmg)
    {
        this.dmg = dmg;


    }
}