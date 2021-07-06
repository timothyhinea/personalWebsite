
class View{
    constructor(hp, playerLevel){
        $('#health').attr("value", hp);
		$('#health').attr("max", hp);

		$("#cardChoices").append(` <img src="img/cards/starship.svg" 
		alt="CardA" 
		class="q5Choice A">`);	

        $("#playerLevel").html(`Player level: ${playerLevel}`)
    }

    scoreDiplay(score, playerLevel){ 
		 $("#totalScore").html(`Monster Kills ${score}`);
         $("#playerLevel").html(`Player level: ${playerLevel}`);
	}

    changeImg(A, hp){
        let monsterArray = ["starship","starshipdark","ufo","ufodark"];
        monsterArray = _.shuffle(monsterArray)
        $(A).attr("src", `img/cards/${monsterArray[0]}.svg`)
        $('#health').attr("value", hp);
		$('#health').attr("max", hp);
    }

    updateHp(hp){
        $('#health').attr("value", hp);
        $('#health').attr("value", hp);
    }


}