$(document).ready(function(){
    
    //global variables
    var score = 0;
	var monster;
	var player;
	var view;
	init();

	//Function to get a new Monster and put them on the screen
	function init(){
		player = new Player();
		monster = new Monster(player.attack);
		view = new View(monster.hp, player.attack);
		console.log(monster.hp);
	}

	$("#restart").click( function(e){
		player = new Player();
		monster = new Monster(player.attack);
		view.updateHp(monster.hp);
	})

    //event listeners
    //$("button").on("click", gradeQuiz);

	//Listener for clicking on a card
    $(".q5Choice").click( function(e){
		monster.takeDmg(player.attack);
		//if monster dies get a new monster and update the score
		if(monster.hp <= 0)
			{
				score += 1;
				if(score%5 === 0)
					player.levelUp();
				view.scoreDiplay(score, player.attack);
				shuffle(this);
			}
		else{
			view.updateHp(monster.hp);
		}
    })
	//Functions

	

	function shuffle(A){
		monster = new Monster(player.attack);
		console.log(monster.hp);
		view.changeImg(A, monster.hp);
    }

	//Funciton that displays  the ammout of cards selected.
	
	   
    });