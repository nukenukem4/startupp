
window.onload = function() {
    
  var controls = document.querySelectorAll('.controls');

var slides = document.querySelectorAll('#slides .slideritem');
var currentSlide = 0;


function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slideritem';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slideritem showing';
}


//var playing = true;
//var pauseButton = document.getElementById('pause');

//function pauseSlideshow(){
//	pauseButton.innerHTML = '&#9658;'; // play character
//	playing = false;
//	clearInterval(slideInterval);
//}

//function playSlideshow(){
//	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
//	playing = true;
//	slideInterval = setInterval(nextSlide,2000);
//}

//pauseButton.onclick = function(){
//	if(playing){ pauseSlideshow(); }
//	else{ playSlideshow(); }
//};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
//	pauseSlideshow();
	nextSlide();
};
previous.onclick = function(){
//	pauseSlideshow();
	previousSlide();
};

};

