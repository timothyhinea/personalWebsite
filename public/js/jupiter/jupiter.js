$(document).ready(function(){
    
    //global variables
    var score = 0;
    var attempts = localStorage.getItem("total_attempts");
    var card;
    //event listeners
    //$("button").on("click", gradeQuiz);
	shuffle()
	//Listener for clicking on a card
    $(".q5Choice").click( function(e){
		scoreDiplay();
		//if there are less than two cards selected
		if($(".toggle").length < 2)
		{
			//if no card is selected
			if($(".toggle").length == 0)
			{
				$(this).toggleClass("toggle");
				changeImg(this);
				card = $(this).attr("src");
			}

			//if One card is selected
			else if($(".toggle").length === 1)
			{
				$(this).toggleClass("toggle");
				changeImg(this);
				
				if($(this).attr("src") === card)
				{
					$(".toggle").fadeOut(700);
					$(".toggle").addClass("wonPairs");
					$(".toggle").toggleClass("toggle");
					wonPairs(card);
                    //If game is won
					if($(".wonPairs").length >=  8)
					{
						$(".wonPairs").remove();
						$("#displayMessage").html("Congratulations! You Win!");
						$("#displayMessage").fadeIn(3000);
					}
				}
			}
		}	
		else if($(this).hasClass("toggle")){
			$(this).toggleClass("toggle");
			changeImg(this);
			card = $(".toggle").attr("src");
		}	
		
    })
	//Functions

	//Function to display the found pairs
	function wonPairs(path){
		$("#wonPairs").append(` <img src="${path}" 
			alt="Card" >`);
	}
	
	//Function to change the image of the card from the back of card
	//image to whatever face card value
	function changeImg(A){
		console.log(card);
		if(!$(A).hasClass("toggle")){
			$(A).attr("src", "img/cards/BK.gif")
		} 
		else if($(A).hasClass("J")){
			$(A).attr("src", "img/cards/JH.gif")		
		}
		else if($(A).hasClass("Q")){
			$(A).attr("src", "img/cards/QH.gif")		
		}
		else if($(A).hasClass("K")){
			$(A).attr("src", "img/cards/KH.gif")		
		}
		else if($(A).hasClass("A")){
			$(A).attr("src", "img/cards/AH.gif")		
		}
	}

	//Function to randomize the cards and put them on the screen
    function shuffle(){
		let cardArray = ["J","Q","K","A","J","Q","K","A"];
        cardArray = _.shuffle(cardArray)
		
        for(let i = 0; i < cardArray.length; i++){
			$("#cardChoices").append(` <img src="img/cards/BK.gif" 
			alt="Card${cardArray[i]}" 
			class="q5Choice ${cardArray[i]}">`);
		}
    }
	
	//Funciton that displays  the ammout of cards selected.
	function scoreDiplay(){ 
		score+= 1;
		 $("#totalScore").html(`Guesses ${score}`);
		
        $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
        localStorage.setItem("total_attempts", attempts);
	}
	   
    });