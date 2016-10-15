window.onload = function(){
	var startPositionX = undefined;
	var startPositionY = undefined;
	
	var begin = document.getElementById("start");
	begin.onclick = start;
	var playing = false;
	var finish = document.getElementById("end");
	finish.onmouseover = comp;
	
	var boundaries = document.getElementsByClassName("boundary");
	for(var i=0; i< boundaries.length - 1; i++){
		boundaries[i].onmouseover = youLose;
		
	}
	
	function youLose(){
	for(var i=0; i< boundaries.length-1; i++){
		if(playing)
		{
			boundaries[i].setAttribute("class", "boundary youlose");
		}
	}
	}
	
	function comp(){
		if(playing == true) {
			var check = document.querySelectorAll(".youlose");
			if(check.length > 0)
			{
				document.getElementById("status").textContent = "YOU LOSE :(";
			}else{
				document.getElementById("status").textContent = "YOU WIN!! :)";
				
			}
			playing = false;
		}
	}
	
	function start(){
		startPositionX = event.clientX;
		startPositionY = event.clientY;
		var x = document.querySelectorAll(".youlose");
		if (playing == false){
			console.log("length: " + x.length);
			if(x.length > 0)
			{
				for(var m = 0; m < x.length; m++){
					x[m].setAttribute("class", "boundary");
				}
			}
		}
		playing = true;	
		
	}
	
	function NoCheating(){
		var start = document.getElementById("start").offsetWidth;
		var above = document.getElementById("boundary1").offsetHeight;
		console.log("start width: " + start + " above val: " + above);
		var start = document.getElementById("start").offsetLeft;
		console.log("offset value: " + start);
		var x = event.clientX;
		var y = event.clientY;
		var coor = "X coordinate:" + x + ", Y coordinates:" + y;
		console.log(coor);
		document.addEventListener("mousemove", function(){
			if(playing)
			{
				start = document.getElementById("maze").offsetLeft;
				console.log("here " + start);
				if(event.clientX < start)
				{
					console.log("You Cheating");
					document.getElementById("status").textContent = " UHHHH You Cheating!....You're a Cheater!";
					
					for(var i=0; i< boundaries.length-1; i++){
						
						if(playing) {
							boundaries[i].setAttribute("class", "boundary youlose");
							}
						
						
					}
						
				}
			}
		});
		
	}
	NoCheating();		
		
	
	
	
	
};

/*

window.onload = function(){
	
	document.getElementById("boundary1").onmouseover = boun;
	
	function boun(){
	document.getElementById("boundary1").className += "youlose";
	console.log("here");
	var redboun = [];
	for(var )
	//document.getElementById("boundary1").setAttribute("class","youlose");
}

};

*/