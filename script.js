let img = document.querySelectorAll(".imej")
let click = document.querySelectorAll(".click")
let index = 0;

click[1].addEventListener("click", function(){
	if(index < img.length-1){
		index++;
		img[index].classList.add("inline");
		img[index].classList.remove("hidden");
		img[index-1].classList.add("hidden");
	}
})

click[0].addEventListener("click", function(){
	if(index > 0){
		index--;
		img[index].classList.add("inline");
		img[index].classList.remove("hidden");
		img[index+1].classList.add("hidden");
	}
})