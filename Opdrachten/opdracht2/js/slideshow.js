document.onkeydown =function(e){
  if(e.keyCode == 37){
    plusDivs(-1);
  }
  if(e.keyCode == 39){
    plusDivs(1);
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gallery");
  if (n > x.length) {
	  slideIndex = 1
	  }
  
  if (n < 1) {
	  slideIndex = x.length
	  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}