// let i = 2;
// console.log("Consumo de Api");

const section = document.querySelector(`.container__cartas`);

// Funcion para numero random
const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};
// Creando una variable con el num Random
let id = getRandomInt(1, 20);

// Indicando que se consuma la api,despues de cargar el DOM, es decir la paigna html(Creo que no importa mcho si esta arriba o abajo de la funcion ya que es asincrona y tiene que esperar que carge el DOM).
document.addEventListener("DOMContentLoaded", () => {
	fechtData(id);
});

// LLamando a la Api con async await(significa que tiene que esperar los demas comando hasta que se cumpla esto)
const fechtData = async id => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		// Convirtiendo el contenido de la Api en un json
		const data = await res.json();
		// Obteniendo valores de las Apis
		// LLamando a la funcion
		pintarCard(data);
		// console.log(data);
	} catch (error) {
		console.log("Ocurrio un error conectando con la Api");
	}
};

// Creamos una funcion con un parametro de retorno , en este caso nos retornará la data
const pintarCard = pokemon => {
	// console.log(pokemon);
	// Usamos el .content para acceder al CONTENIDO DE LA Etiqueta NO a la etiqueta ensi,sino A lo de ADENTRO
	// Declarando el template
	const template = document.querySelector(`.template`).content;
	// Creando un clone  del template,(es mejor usar el clone ya que es posible que si usamos el template orignal existan errores )
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
		.setAttribute(`src`, `${pokemon.sprites.back_shiny}`);

	fragment.appendChild(clone_template);
	main.appendChild(fragment);
};
