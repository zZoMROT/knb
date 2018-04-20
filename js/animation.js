var changingImage = ["k","n","b"];
var i_changingImage = 1;
var j_changingImage = 1;
var gameStatus = 1;

var CPUChoose = setInterval(function(){ 
	if(i_changingImage++ >= 2) i_changingImage = 0;
	document.getElementById("changingImage").src = "image/" + changingImage[i_changingImage] + ".png"; 
}, 100);

var USERChoose = setInterval(function(){
	if(j_changingImage++ >= 2){
		j_changingImage = 0;
		document.getElementById(changingImage[2]).src = "image/" + changingImage[2] + ".png";
	}
	document.getElementById(changingImage[j_changingImage]).src = "image/" + changingImage[j_changingImage] + "2.png";
	document.getElementById(changingImage[j_changingImage-1]).src = "image/" + changingImage[j_changingImage-1] + ".png";
}, 500);

function stopAnimation(variable, CPUknb){
	clearInterval(USERChoose);
	clearInterval(CPUChoose);
	
	document.getElementById("changingImage").src = "image/" + CPUknb + "3.png";
	for(var i = 0; i < 3; i++){
		if(changingImage[i] == variable)
			document.getElementById(changingImage[i]).src = "image/" + changingImage[i] + "3.png";
		else 
			document.getElementById(changingImage[i]).src = "image/" + changingImage[i] + ".png";
	}
	
	setTimeout(function(){ gameStatus = 0; }, 500);
}