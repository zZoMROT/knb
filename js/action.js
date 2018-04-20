var knb = ["k", "n", "b"];

var CPUknb = Math.random()*3|0;

function userChoose(variable){
	if(gameStatus == 0)
		return;
		
	stopAnimation(variable, knb[CPUknb]);
	
	if(Math.abs(knb.indexOf(variable) - CPUknb) == 0)
		document.getElementById("result").innerHTML = "EQUAL";
	if(Math.abs(knb.indexOf(variable) - CPUknb) == 1){
		if(knb.indexOf(variable) > CPUknb)
			document.getElementById("result").innerHTML = "YOU LOSE";
		else
			document.getElementById("result").innerHTML = "YOU WIN";
	}
	if(Math.abs(knb.indexOf(variable) - CPUknb) == 2){
		if(knb.indexOf(variable) > CPUknb)
			document.getElementById("result").innerHTML = "YOU WIN";
		else
			document.getElementById("result").innerHTML = "YOU LOSE";
	}
	document.getElementById("result2").innerHTML = "Click Mouse to RESTART";
}

function restartGame(){
	if(gameStatus == 0)
		location.reload();
}