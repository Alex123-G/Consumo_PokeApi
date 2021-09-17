const btn = document.querySelector(".nav__toggle");
const nav = document.getElementById("nav_list");
const link = document.querySelectorAll(`.item-link`);

link.forEach(element => {
	element.addEventListener(`click`, () => {
		nav.classList.toggle(`nav__header_visible`);
	});
});

btn.addEventListener(`click`, () => {
	nav.classList.toggle(`nav__header_visible`);
});
