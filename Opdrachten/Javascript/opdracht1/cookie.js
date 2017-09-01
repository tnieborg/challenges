var CookieCutter =  function(size = "", hasChocolateChip = false) {
	this.size = size;
	this.hasChocolateChip = hasChocolateChip;
	this.Chocolatechip = "";

	this.addChocolateChip = function (hasChocolateChip){
			this.hasChocolateChip = true;
	}
	this.removeChocolateChip = function (hasChocolateChip){
			this.hasChocolateChip = false;
	}
};

var cookie1 = new CookieCutter("medium");
var cookie2 = new CookieCutter("large");
cookie1.addChocolateChip();
cookie2.removeChocolateChip();
console.log(cookie1.size, cookie1.hasChocolateChip);
console.log(cookie2.size, cookie2.hasChocolateChip);

if(cookie1.hasChocolateChip == true){
	Chocolatechip1 = "chocolatechip";
}else{
	Chocolatechip1 = "no chocolatechip";
}
if(cookie2.hasChocolateChip == true){
	Chocolatechip2 = "chocolatechip";
}else{
	Chocolatechip2 = "no chocolatechip";
}
document.getElementById("cookie1").innerHTML = "The cookie is " + cookie1.size + " and it has " + Chocolatechip1;
document.getElementById("cookie2").innerHTML = "The cookie is " + cookie2.size + " and it has " + Chocolatechip2;

