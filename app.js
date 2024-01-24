const menuButton = document.querySelector(".menu-icon");

const closeButton = document.querySelector(".close-icon");

const menuDropdown = document.querySelector(".menu-group");

const bgBlur = document.querySelector(".background-blur");

const buttons = document.querySelectorAll("button");

const illustration = document.querySelector(".illu");

let dropdownActive = false;

const onDrop = () => {
	bgBlur.classList.add("active");
	menuDropdown.classList.add("active");
	dropdownActive = true;
};

const offDrop = () => {
	bgBlur.classList.remove("active");
	menuDropdown.classList.remove("active");
	dropdownActive = false;
};

menuButton.onclick = () => onDrop();

closeButton.onclick = () => offDrop();

menuDropdown.addEventListener("click", (e) => {
	const item = e.target.matches(".menu-item-name");

	if (item) {
		e.target.closest(".menu-item").classList.toggle("active");
	}
});

for (const btn of buttons) btn.addEventListener("click", (e) => e.preventDefault());

const checkScreen = () => {
	if (window.innerWidth > 824) {
		illustration.src = "/images/image-hero-desktop.png";
	} else {
		illustration.src = "/images/image-hero-mobile.png";
	}
};

window.addEventListener("resize", checkScreen);

checkScreen();
