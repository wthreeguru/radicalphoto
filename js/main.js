// JavaScript Document

// variables for index.html
var var_slider = document.getElementById('slider');
var var_slider_text = document.getElementById('slider_text');

// variables for gallery.html
var var_blue_dress = document.getElementById('blue_dress');
var var_boxer = document.getElementById('boxer');
var var_cow = document.getElementById('cow');
var var_boy = document.getElementById('boy');
var var_eye = document.getElementById('eye');
var var_ice = document.getElementById('ice');
var var_sitting = document.getElementById('sitting');
var var_large_image = document.getElementById('large_image');

// index.html
function changetext() {
	// slider
	var_slider.style.transition = "all 2.5s";
	var_slider.style.background = "#009e47";
	// slider text
	var_slider_text.style.transition = "all 2.5s";
	var_slider_text.innerHTML = "Capturing Nature";
	var_slider_text.style.fontSize = '2.5em';
}

//changetext();
// setimeout to give delay
var text_start_timeout = setTimeout(changetext, 2500);

// gallery.html
var_blue_dress.onmouseover = function () {
	var_large_image.src = "images/blue_dress.jpg";
	var_large_image.width = 800;
	var_large_image.height = 533;
    var_large_image.alt = "young girl standing with her back on an old wooden fence wearing a blue dress with no shoes on a warn sunny day";
    var_large_image.title = "Young girl with blue dress";
}

var_boxer.onmouseover = function () {
	var_large_image.src = "images/boxer.jpg";
	var_large_image.width = 800;
	var_large_image.height = 551;
	var_large_image.alt = "boxer with sweat coming down his face";
    var_large_image.title = "Boxer";
}

var_cow.onmouseover = function () {
	var_large_image.src = "images/slider_cow.jpg";
	var_large_image.width = 600;
	var_large_image.height = 275;
	var_large_image.alt = "cow in a green grassy field standing by a road sign which displays authorized vehicles only";
    var_large_image.title = "Cow";
}

var_boy.onmouseover = function () {
	var_large_image.src = "images/country_boy_relaxing.jpg";
	var_large_image.width = 801;
	var_large_image.height = 536;
	var_large_image.alt = "a cowboy of young age sitting with his back on a barn door while the sun is shining on his face while wearing a hat and no shoes";
    var_large_image.title = "Cowboy";
}

var_eye.onmouseover = function () {
	var_large_image.src = "images/eye.jpg";
	var_large_image.width = 800;
	var_large_image.height = 560;
	var_large_image.alt = "a close up view of an eye with a multicoloured eye ball and a black and white eyelid";
    var_large_image.title = "Eye ball";
}

var_ice.onmouseover = function () {
	var_large_image.src = "images/ice_swim.jpg";
	var_large_image.width = 800;
	var_large_image.height = 547;
	var_large_image.alt = "a man wearing swimming trunks emerges from an opening in a frozen lake he went for a mid afternoon dip";
    var_large_image.title = "Ice swim";
}

var_sitting.onmouseover = function () {
	var_large_image.src = "images/sitting.jpg";
	var_large_image.width = 800;
	var_large_image.height = 600;
	var_large_image.alt = "on a dirt road a young man wearing light brown pants with a cream coloured jacket and open sandles is sitting on the grassy side of the road waiting for a ride";
    var_large_image.title = "Sitting by the road";
}
