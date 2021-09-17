const btn_action = document.getElementById("btn_action");

const callApi = () => {};

const readData = () => {};

btn_action.addEventListener(`click`, () => {
	const num_min = document.getElementById("num_min").value;
	const num_max = document.getElementById("num_max").value;
	if (num_min > num_max) {
		alert("El primer número no puede ser mayor al segundo.");
	} else {
		// LLamar a la funcion
	}
	console.log(num_min);
	console.log(num_max);
});
