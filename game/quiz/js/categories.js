let wraper = document.getElementsByClassName('wraper')[0];
let resault = document.getElementsByClassName('resault')[0];
let imgDiv = document.getElementsByClassName('img__none')[0];
let resaultTitle = document.getElementsByClassName('resault__title')[0];
let questions = document.getElementsByClassName('questions')[0];

document.addEventListener("DOMContentLoaded", () => {
	return wraper.style.background = "none";
});

resault.onclick = function () {
	
	questions.style.margin = "40px 0px 50px";
	resault.classList.add('button__none');
	imgDiv.classList.add('img');
	imgDiv.classList.remove('img__none');
	resaultTitle.classList.remove('resault__none');

}