const callApi = async pokemon => {
	try {
		const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		const data = await url.json();
		const info = await data;
		showData(info);
	} catch (error) {
		alert("Ese pokemon no existe o esta mal escrito, revisar.");
	}
};
const showData = pokemon => {
	// Declaracion de variables
	const template = document.querySelector(`.template`).content;
	const clon_template = template.cloneNode(true);
	const section = document.querySelector(".container__cartas");
	const fragment = document.createDocumentFragment();
	const numero_poke = clon_template.querySelector(`.num_poke`);
	const imagen = clon_template.querySelector(`.carta__img`);
	const nombre_poke = clon_template.querySelector(`.titulo__carta`);
	const hp = nombre_poke.querySelector(`.span_carta`);
	const dato_numero_ataque = clon_template.querySelector(`.datos__carta-ataque`);
	const numero_ataque = dato_numero_ataque.querySelector(`.numero_ataque`);
	const dato_numero_ataque_esp = clon_template.querySelector(`.datos__carta-especial`);
	const numero_ataque_esp = dato_numero_ataque_esp.querySelector(`.numero_especial`);
	const dato_numero_defensa = clon_template.querySelector(`.datos__carta-defensa`);
	const numero_defensa = dato_numero_defensa.querySelector(`.numero_defensa`);

	// Insertando los valores a las etiquetas
	numero_poke.innerHTML = `N° ${pokemon.id}`;
	imagen.setAttribute(`src`, `${pokemon.sprites.other.dream_world.front_default}`);
	nombre_poke.innerHTML = `${pokemon.name}`;
	hp.innerHTML = `${pokemon.stats[0].base_stat} HP`;
	nombre_poke.appendChild(hp);

	numero_ataque.innerHTML = `${pokemon.stats[1].base_stat}K`;
	dato_numero_ataque.appendChild(numero_ataque);

	numero_ataque_esp.innerHTML = `${pokemon.stats[3].base_stat}K`;
	dato_numero_ataque_esp.appendChild(numero_ataque_esp);

	numero_defensa.innerHTML = `${pokemon.stats[2].base_stat}K`;
	dato_numero_defensa.appendChild(numero_defensa);

	//
	fragment.appendChild(clon_template);
	section.appendChild(fragment);
};

// Aque el parametro que tenemos que colocar es el nombre del pokemon el cual se lo pasaremos con el valor del input.

const btn_action = document.getElementById(`btn_action`);
btn_action.addEventListener(`click`, () => {
	const value_input = document.getElementById("name").value;
	if (value_input == "" || value_input == " ") {
		alert("No se permiten esos campos, por favor ingresar uno válido");
	} else {
		callApi(value_input);
	}
});
