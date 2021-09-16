const btn = document.querySelector(".nav__toggle");
const nav = document.getElementById("nav_list");

btn.addEventListener(`click`, () => {
	nav.classList.toggle(`nav__header_visible`);
});
