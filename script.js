//your JS code here. If required.
const counter = document.getElementById("counter");
const button = document.getElementById("incrementBtn");

let counterValue = 0;

button.addEventListener("click" , function() {
	alert(counterValue);

	counterValue++;

	counter.textContent = counterValue;
});