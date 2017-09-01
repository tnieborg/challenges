'use strict';

var slideIndex = 1;
var text = "";
var i;

var getJSON = function(url) {
 var xmlr = new XMLHttpRequest();
    xmlr.open('get', url, false);
    xmlr.send();
	return xmlr.responseText;
};

var jsondata = JSON.parse(getJSON('http://test.competa.com/js-movies-test/data/movies-json.php')).data;
var data = jsondata[0];  


for (i = 0; i < data.assets.length-1; i++) { 
	if (data.assets[i].genre === "Action"){
    text += '<div class="img fadin"><img src="' + data.assets[i].img + '"><p>' + data.assets[i].title + '</p></div>';
	}else{
		text += '<div class="img fadin"><p>' + data.assets[i].title + ' is not an action movie</p></div>';
	}
}

    document.getElementById('img').innerHTML = text;



document.onkeydown =function(e){
  if(e.keyCode == 37){
    nextSlide(-1);
  }
  if(e.keyCode == 39){
    nextSlide(1);
  }
}


showSlide(slideIndex);

function nextSlide(n) {
  showSlide(slideIndex += n);
}

function thisSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("img");
  if (n > slides.length) {
	  slideIndex = 1
	  }
  
  if (n < 1) {
	  slideIndex = slides.length
	  }
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
     //titles[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  //titles[slideIndex-1].style.display = "block";
}