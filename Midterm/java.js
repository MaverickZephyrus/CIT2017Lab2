var controltrigger = 0;
var bgx = 0;
var bgy = 0;
var bgh = 300;

/*------------functions----------------*/
function expandMenu(){
	if(controltrigger == 0){
		document.getElementById("controls").style.bottom="0px";
		controltrigger = 1;
	} else if(controltrigger == 1){
		document.getElementById("controls").style.bottom="-120px";
		controltrigger = 0;
	}
}

function changeColor(){
	var colr = document.getElementById("colorbox").value;
	
	document.getElementById("title").style.color=colr;
	document.getElementById("parag").style.color=colr;
}

function changeDescription(){
	var desc = document.getElementById("body").value;
	
	document.getElementById("parag").innerHTML=desc;
}

function changeTitle(val){
	var titl = document.getElementById("head").value;
	
	document.getElementById("title").innerHTML=titl;
}

function changeBG(ev){
	var lin = document.getElementById("link").value;
	var ind = lin.indexOf("epic");
	
	if(ev.keyCode == 13){
		document.getElementById("background").style.backgroundImage="url("+lin+")";
	}else if(lin == "horse"){
		document.getElementById("background").style.backgroundImage="url(img/bg1.jpg)";
	}else if(lin == "night"){
		document.getElementById("background").style.backgroundImage="url(img/bg2.jpg)";
	}else if(lin == "mountain"){
		document.getElementById("background").style.backgroundImage="url(img/bg3.jpg)";
	}else if(ind != -1){
		document.getElementById("background").style.backgroundImage="url(img/bg4.jpg)";
	}
}

function moveBG(keyCode){
	if(keyCode.keyCode == 38){
		bgy = bgy -10;
		document.getElementById("background").style.backgroundPositionY=bgy+"px";
	}if(keyCode.keyCode == 40){
		bgy = bgy +10;
		document.getElementById("background").style.backgroundPositionY=bgy+"px";
	}if(keyCode.keyCode == 37){
		bgx = bgx -10;
		document.getElementById("background").style.backgroundPositionX=bgx+"px";
	}if(keyCode.keyCode == 39){
		bgx = bgx +10;
		document.getElementById("background").style.backgroundPositionX=bgx+"px";
	}if(keyCode.keyCode == 107){
		bgh = bgh +10;
		document.getElementById("background").style.height=bgh+"px";
	}if(keyCode.keyCode == 109){
		bgh = bgh -10;
		document.getElementById("background").style.height=bgh+"px";
	}
}

/*--------menu movement-------------*/
document.getElementById("menu").addEventListener("click", function(){
	expandMenu();
})

/*--------change background image--*/
document.getElementById("link").addEventListener("keyup", function(ev){
	changeBG(ev)
})

/*------change title--------------*/
document.getElementById("head").addEventListener("keyup", function(ev){
	changeTitle();
})

/*------change description--------------*/
document.getElementById("body").addEventListener("keyup", function(ev){
	changeDescription();
})

/*----------change color----------*/
document.getElementById("colorbox").addEventListener("change", function(ev){
	changeColor();
})

/*-------move the background image----------*/
window.addEventListener("keydown", function(ev){
	moveBG(ev);
})


/*---------------add new divs--------------*/
document.getElementById("add").addEventListener("click", function(){
	var backdiv = document.createElement("div");
	var titdiv = document.createElement("div");
	var descdiv = document.createElement("div");
	var titl = document.getElementById("title").innerHTML;
	var desc = document.getElementById("parag").innerHTML;
	
	backdiv.className = "subback col-xs-12 col-sm-6 col-md-4 col-lg-3";
	titdiv.className = "subtit";
	descdiv.className = "subdesc";
	
	document.getElementById("display").appendChild(backdiv);
	backdiv.appendChild(titdiv);
	backdiv.appendChild(descdiv);
	
	backdiv.style.cssText=document.getElementById("background").style.cssText;
	backdiv.style.position="relative";
	backdiv.style.width="100%";
	backdiv.style.height="300px";
	backdiv.style.backgroundSize="cover";
	backdiv.style.display="inline-block";
	
	titdiv.innerHTML = titl;
	titdiv.style.cssText = document.getElementById("title").style.cssText;
	titdiv.style.position="absolute";
	titdiv.style.left="10%";
	titdiv.style.top="10%";
	titdiv.style.fontSize="20px";
	titdiv.style.fontWeight="bold";
	titdiv.style.borderBottom="solid grey";
	
	descdiv.innerHTML = desc;
	descdiv.style.cssText = document.getElementById("parag").style.cssText;
	descdiv.style.position="absolute";
	descdiv.style.left="10%";
	descdiv.style.top="20%";
	descdiv.style.fontWeight="bold";

	
	
})








































