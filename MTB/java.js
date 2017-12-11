var bike_trggr = 0,
	gear_trggr = 0,
	skills_trggr = 0,
	skill_page_triggr = 0,
	disc_trggr = 0,
	vbg_triggr = 1,
	rec_pnl_trggr = 0,
	in_arr = {},
	g_name = "",
	g_circ = 0,
	g_ht = 0;
	


/*------------------preload and check for stored local----------------*/
function check_stored(){
	var t = localStorage.getItem("guest"),
		arr = JSON.parse(t);
	
	if(t != null){
		g_name = arr["name"];
		g_circ = arr["head"];
		g_ht = arr["height"];
		document.getElementById("welcome_lock").style.display="none";
		document.getElementById("welc_name").innerHTML="Hello:"+g_name;
		fill_head(g_circ);
		fill_ht(g_ht);
	}
}

check_stored();


/*---------------Recommendation panel--------------*/
function fill_head(head) {
	if(head >= 54 && head <= 56){
		document.getElementById("helm").innerHTML="<u>Small</u>";
	}else if(head >= 57 && head <= 60){
		document.getElementById("helm").innerHTML="<u>Medium</u>";
	}else if(head >= 61 && head <= 63){
		document.getElementById("helm").innerHTML="<u>Large</u>";
	}else if(head >= 64 && head <= 65){
		document.getElementById("helm").innerHTML="<u>Extra Large</u>";
	}else{
		document.getElementById("helm").innerHTML="<u>No Size Available</u>";
	}
}

function fill_ht(ht) {
	if(ht >= 148 && ht <= 158){
		document.getElementById("bk_size").innerHTML="<u>Extra Small</u>";
	}else if(ht >= 159 && ht <= 168){
		document.getElementById("bk_size").innerHTML="<u>Small</u>";
	}else if(ht >= 169 && ht <= 178){
		document.getElementById("bk_size").innerHTML="<u>Medium</u>";
	}else if(ht >= 179 && ht <= 185){
		document.getElementById("bk_size").innerHTML="<u>Large</u>";
	}else if(ht >= 186 && ht <= 193){
		document.getElementById("bk_size").innerHTML="<u>Extra Large</u>";
	}else if(ht >= 194 && ht <= 198){
		document.getElementById("bk_size").innerHTML="<u>XX Large</u>";
	}else{
		document.getElementById("bk_size").innerHTML="<u>No Size Available</u>";
	}
}

function rec_panel_hide() {
	if(rec_pnl_trggr == 0){
		document.getElementById("rec_box").style.left="0px";
		rec_pnl_trggr = 1;
	}else if(rec_pnl_trggr == 1){
		document.getElementById("rec_box").style.left="-200px";
		rec_pnl_trggr = 0;
	}
}

document.getElementById("welc_name").addEventListener("click", function() {
	rec_panel_hide();
})

document.getElementById("reentry").addEventListener("click", function() {
	document.getElementById("welcome_lock").style.display="block";
})

/*--------------background change---------------*/
function vbgOnOff() {
	if (vbg_triggr == 1) {
		document.getElementById("background_vid").src="img/bg2.jpg";
		document.getElementById("change_bg").innerHTML="Static";
		vbg_triggr = 0;
	}else if (vbg_triggr == 0) {
		document.getElementById("background_vid").src="https://www.youtube.com/embed/zf4xX_fVgN4?autoplay=1&loop=1&showinfo=0&autohide=1&controls=0&mute=1&modestbranding=0&rel=0&playlist=zf4xX_fVgN4";
		document.getElementById("change_bg").innerHTML="Video";
		vbg_triggr = 1;
	}
}

document.getElementById("change_bg").addEventListener("click", function(){
	vbgOnOff();
})

/*-----------------welcome page--------------------*/
function sav_arr() {
	var tName = document.getElementById("name").value,
		hCirc = document.getElementById("head_circ").value,
		tHeight = document.getElementById("vheight").value;
	
	in_arr["name"] = tName;
	in_arr["head"] = hCirc;
	in_arr["height"] = tHeight;
	
	g_name = tName;
	g_circ = hCirc;
	g_ht = tHeight;
}

function sav_loc(arr) {
	var arr_txt = JSON.stringify(in_arr);
	
	localStorage.setItem("guest", arr_txt);
}

document.getElementById("submit").addEventListener("click", function() {
	sav_arr();
	sav_loc(in_arr);
	fill_head(g_circ);
	fill_ht(g_ht);
	document.getElementById("welcome_lock").style.display="none";
	document.getElementById("welc_name").innerHTML="Hello:"+g_name;
})

document.getElementById("ignore").addEventListener("click", function() {
	document.getElementById("welcome_lock").style.display="none";
})
												   
/*--------------bike type interactions----------------*/
function show_bike(){
	if(bike_trggr == 0){
		document.getElementById("bike_box").style.display="block";
		b2bike();
		bike_trggr = 1;
	}else if(bike_trggr == 1){
		document.getElementById("bike_box").style.display="none";
		bike_trggr = 0;
	}
}

function b2bike(){
	document.getElementById("bike_box_content0").style.display="block";
	document.getElementById("bike_box_content1").style.display="none";
	document.getElementById("bike_box_content2").style.display="none";
}

document.getElementById("bike_type").addEventListener("click",function(){
	document.getElementById("gear_box").style.display="none";
	gear_trggr = 0;
	document.getElementById("skill_box").style.display="none";
	skills_trggr = 0;
	document.getElementById("discipline_box").style.display="none";
	disc_trggr = 0;
	show_bike();
})

document.getElementById("htail").addEventListener("click", function(){
	document.getElementById("bike_box_content0").style.display="none";
	document.getElementById("bike_box_content1").style.display="block";
})

document.getElementById("fsus").addEventListener("click", function(){
	document.getElementById("bike_box_content0").style.display="none";
	document.getElementById("bike_box_content2").style.display="block";
})

document.getElementById("bike1").addEventListener("click", function(){
	b2bike();
})

document.getElementById("bike2").addEventListener("click", function(){
	b2bike();
})

/*-------------------gear interactions-----------------------*/
function show_gear(){
	if(gear_trggr == 0){
		document.getElementById("gear_box").style.display="block";
		gear_trggr = 1;
	}else if(gear_trggr == 1){
		document.getElementById("gear_box").style.display="none";
		gear_trggr = 0;
	}
}

document.getElementById("gear").addEventListener("click",function(){
	document.getElementById("bike_box").style.display="none";
	bike_trggr = 0;
	document.getElementById("skill_box").style.display="none";
	skills_trggr = 0;
	document.getElementById("discipline_box").style.display="none";
	disc_trggr = 0;
	show_gear();
})

/*-------------------skill interactions-----------------------*/
function show_skills(){
	if(skills_trggr == 0){
		document.getElementById("skill_box").style.display="block";
		skills_trggr = 1;
	}else if(skills_trggr == 1){
		document.getElementById("skill_box").style.display="none";
		skills_trggr = 0;
	}
}

function skill_page_change(mtrggr){
	if(skill_page_triggr == 0){
		if(mtrggr == 1){
			document.getElementById("skill_info").style.display="none";
			document.getElementById("skill_box_content").style.display="block";
			document.getElementById("prev_skil_vid").style.display="block";
			skill_page_triggr = 1;
		}
	}else if(skill_page_triggr == 1){
		if(mtrggr == 1){
			document.getElementById("skill_name").innerHTML="<p><strong>Manual</strong></p>";
			document.getElementById("skill_videos").src="https://www.youtube.com/embed/YifOMQyNijk?showinfo=0&modestbranding=0";
			skill_page_triggr = 2;
		}else if(mtrggr == 0){
			document.getElementById("skill_info").style.display="block";
			document.getElementById("skill_box_content").style.display="none";
			document.getElementById("prev_skil_vid").style.display="none";
			skill_page_triggr = 0;
		}
	}else if(skill_page_triggr == 2){
		if(mtrggr == 1){
			document.getElementById("skill_name").innerHTML="<p><strong>Skinnies</strong></p>";
			document.getElementById("skill_videos").src="https://www.youtube.com/embed/UY3O3IjXpts?showinfo=0&modestbranding=0";
			document.getElementById("next_skil_vid").style.display="none";
			skill_page_triggr = 3;
		}else if(mtrggr == 0){
			document.getElementById("skill_name").innerHTML="<p><strong>Bunny Hop</strong></p>";
			document.getElementById("skill_videos").src="https://www.youtube.com/embed/tMPPGQCT8mE?showinfo=0&modestbranding=0";
			skill_page_triggr = 1;
		}
	}else if(skill_page_triggr == 3){
		if(mtrggr == 0){
			document.getElementById("skill_name").innerHTML="<p><strong>Manual</strong></p>";
			document.getElementById("skill_videos").src="https://www.youtube.com/embed/YifOMQyNijk?showinfo=0&modestbranding=0";
			document.getElementById("next_skil_vid").style.display="block";
			skill_page_triggr = 2;
		}
	}
}


document.getElementById("skills").addEventListener("click",function(){
	document.getElementById("bike_box").style.display="none";
	bike_trggr = 0;
	document.getElementById("gear_box").style.display="none";
	gear_trggr = 0;
	document.getElementById("discipline_box").style.display="none";
	disc_trggr = 0;
	show_skills();
})

document.getElementById("prev_skil_vid").addEventListener("click", function(){
	skill_page_change(0);
})

document.getElementById("next_skil_vid").addEventListener("click", function(){
	skill_page_change(1);
})


/*-------------------discipline interactions-----------------------*/
function show_disc(){
	if(disc_trggr == 0){
		document.getElementById("discipline_box").style.display="block";
		disc_trggr = 1;
	}else if(disc_trggr == 1){
		document.getElementById("discipline_box").style.display="none";
		disc_trggr = 0;
	}
}

document.getElementById("discipline").addEventListener("click",function(){
	document.getElementById("bike_box").style.display="none";
	bike_trggr = 0;
	document.getElementById("gear_box").style.display="none";
	gear_trggr = 0;
	document.getElementById("skill_box").style.display="none";
	skills_trggr = 0;
	show_disc();
})

/*---------------------credits page-------------*/
document.getElementById("credit").addEventListener("click", function() {
	document.getElementById("credit_page").style.display="block";
})

document.getElementById("close_credit").addEventListener("click", function() {
	document.getElementById("credit_page").style.display="none";
})