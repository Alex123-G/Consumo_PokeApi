const btn_action = document.getElementById("btn_action");

const callApi = async pokeon_id => {
	const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeon_id}
`);
	const info = await url.json();
	const data = info;
	console.log(data);
};

const readData = () => {};

btn_action.addEventListener(`click`, () => {
	const num_min = document.getElementById("num_min").value;
	const num_max = document.getElementById("num_max").value;
	if (num_min > num_max) {
		alert("El primer número no puede ser mayor al segundo.");
	} else {
		for (index = num_min; index <= num_max; index++) {
			callApi(index);
		}
	}
});
