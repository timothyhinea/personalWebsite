
class Player{
    constructor(){
        this.hp = 10;
        this.attack = 1;
    }

    levelUp(){
        this.attack = this.attack +1;
    }
}


class Monster{
    constructor(level){
        this.hp = Math.floor(Math.random()* level * 10);
    }
    takeDmg(atk){
        this.hp = this.hp - atk;
    }
}
