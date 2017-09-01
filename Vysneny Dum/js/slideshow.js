var myIndex = 0;
autoslide();

function autoslide(){
	var index;
	var slides = document.getElementsByClassName("show");

	for (index = 0; index < slides.length; index++) {
       slides[index].style.display = "none";  
    }
    myIndex++;
    if (myIndex > slides.length) {myIndex = 1}    
    slides[myIndex-1].style.display = "block";  
    setTimeout(autoslide, 3000); // Change image every 3 seconds
}
