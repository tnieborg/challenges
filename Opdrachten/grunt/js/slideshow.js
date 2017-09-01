var slideIndex = 1;
showslides(slideIndex);

function gallery(n) {
  showslides(slideIndex = n);
}

function showslides(n){
	var index;
	var slides = document.getElementsByClassName("show");
	var pics = document.getElementsByClassName("sidephoto");

	if (n > slides.length) {
		slideIndex = 1
	}  

	if (n < 1) {
		slideIndex = slides.length
	}

	for (index = 0; index < slides.length; index++) {
	  slides[index].style.display = "none";  
		}

	slides[slideIndex-1].style.display = "block";  
}
