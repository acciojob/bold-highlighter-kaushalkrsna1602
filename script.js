let strong = document.querySelectorAll("strong")
function highlight() {
    //Write your code here
	strong.forEach(darkColor => {
		darkColor.style.color = "green"
	})
}


function return_normal() {
    //Write your code here
	strong.forEach(greenColor => {
		greenColor.style.color = "black"
	})
}