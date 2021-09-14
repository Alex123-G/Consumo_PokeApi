// Funcion para numero random
const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

// Indicando que se consuma la api,despues de cargar el DOM, es decir la paigna html(Creo que no importa mcho si esta arriba o abajo de la funcion ya que es asincrona y tiene que esperar que carge el DOM).
document.addEventListener("DOMContentLoaded", () => {
	//Declarando cuantas veces se repetirá la lista de pokemon
	let cantidad = getRandomInt(1, 50);
	for (i = 0; i < cantidad; i++) {
		let id = getRandomInt(0, 540);
		fechtData(id);
	}
});

// LLamando a la Api con async await(significa que tiene que esperar los demas comando hasta que se cumpla esto)
const fechtData = async pokemon_id => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`);
		// Convirtiendo el contenido de la Api en un json
		const data = await res.json();
		// Obteniendo valores de las Apis
		// LLamando a la funcion
		pintarCard(data);
		// console.log(data);
		// data.types.forEach(element => {
		// 	console.log(element);
		// });
	} catch (error) {
		console.log("Ocurrio un error en la consulta");
	}
};

// Creamos una funcion con un parametro de retorno , en este caso nos retornará la data
const pintarCard = pokemon => {
	// Declarando el template
	// Usamos el .content para acceder al CONTENIDO DE LA Etiqueta NO a la etiqueta ensi,sino A lo de ADENTRO
	const template = document.querySelector(`.template`).content;
	// Creando un clone  del template,(es mejor usar el clone ya que es posible que si usamos el template orignal existan errores )
	// Importante!! en esta ocasion se tiene que crear una copia del template ya que lo que vamos hacer es crear varias copias del template y no agregarle mas info al template;es decir tenemos que crear varias veces el template y no solo una.
	const clone_template = template.cloneNode(true);
	// ---------------
	// Declarando el main donde va ir el conteneido de nuestro fragment
	const main = document.getElementById("ejemplo");
	// ---------------
	// Creando el fragment
	const fragment = document.createDocumentFragment();
	// ---------------
	clone_template
		.querySelector(`.carta__img`)
		.setAttribute(`src`, `${pokemon.sprites.other.dream_world.front_default}`);

	clone_template.querySelector(
		`.titulo__carta`
	).innerHTML = `${pokemon.name}   <span class="span_carta">${pokemon.stats[0].base_stat} HP</span>`;
	clone_template.querySelector(
		`.numero_ataque`
	).innerHTML = `${pokemon.stats[1].base_stat}`;

	clone_template.querySelector(
		`.numero_especial`
	).innerHTML = `${pokemon.stats[3].base_stat}`;

	clone_template.querySelector(
		`.numero_defensa`
	).innerHTML = `${pokemon.stats[2].base_stat}`;
	clone_template.querySelector(`.num_poke`).innerHTML = `N° ${pokemon.id}`;

	if (pokemon.types.length < 2) {
		pokemon.types.forEach(element => {
			const titulo = clone_template.querySelector(`.tipos_pokemon__titulo`);
			const span_type = document.createElement(`span`);
			span_type.setAttribute(`class`, `tipos_pokemon`);
			span_type.innerHTML = element.type.name;
			titulo.appendChild(span_type);
		});
	} else {
		pokemon.types.forEach(element => {
			const titulo = clone_template.querySelector(`.tipos_pokemon__titulo`);
			const span_type = document.createElement(`span`);
			span_type.setAttribute(`class`, `tipos_pokemon segundo_tipo`);
			span_type.innerHTML = element.type.name;
			titulo.appendChild(span_type);
		});
	}

	fragment.appendChild(clone_template);
	main.appendChild(fragment);
};
