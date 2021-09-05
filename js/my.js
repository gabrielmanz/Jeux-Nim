document.querySelector("#bt_play").addEventListener("click", play);
document.querySelector("#bt_remove").addEventListener("click", remove_allumette);

var allumette_restante=16;
var joueur1=""; //on demande le nom du premier joueur
var joueur2=""; //on demande le nom du deuxième joueur
var tour=1 //Numéro du tour cela permet de savoir à quel joueur c'est le tour 1= joueur ; 2= joueur2
var nb_allumette_prise=0; //nombre d'allumette pris par le joueur en cours
var nom_joueur=""; //nom du joueur en cours

function play(){

	joueur1=document.querySelector("#name_player_1").value;
	joueur2=document.querySelector("#name_player_2").value;
	nom_joueur=joueur1;

	document.querySelector("#form_play").style.display="none";
	document.querySelector("#main").style.display="block";

	for(var i=0; i<allumette_restante; i++){
		var img = document.createElement("img");
	    img.src = "images/allumette.png";
	    var div = document.querySelector("#game_board");
	    div.appendChild(img);
	    img.addEventListener("click", click_allumette);
	}

	document.querySelector("#name_player_get").innerHTML="C'est à "+nom_joueur+" de jouer !";

}

function click_allumette(){
	nb_allumette_prise=document.querySelectorAll("#game_board .check").length;
	
	if(this.getAttribute("class")=="check"){
		this.setAttribute("class","");
	}else{
		if(nb_allumette_prise<3){
			this.setAttribute("class","check");
		}
	}	
	
}

function remove_allumette(){

	var check_allumette=document.querySelectorAll("#game_board .check");

	nb_allumette_prise=check_allumette.length;

	for(var i=0;i<check_allumette.length;i++){
		check_allumette[i].remove();
	}

	
	allumette_restante=allumette_restante-nb_allumette_prise; 
	//on alterne les tours de joueurs
	if(tour==1){
		nom_joueur=joueur2;
		tour=2;
	}else{
		nom_joueur=joueur1;
		tour=1;
	}

	if(allumette_restante<=0){

		document.querySelector("#name_player_get").innerHTML=nom_joueur+" a gagné !";
		document.querySelector("#bt_remove").style.visibility="hidden";
	}else{
		
		document.querySelector("#name_player_get").innerHTML="C'est à "+nom_joueur+" de jouer !";
	}	
}



