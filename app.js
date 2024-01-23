const menuDropdown = document.querySelector(".menu-dropdown");
const backgroundBlur = document.querySelector(".background-blur");

document.addEventListener("click", (event) => {
	const menu = event.target.matches(".menu-icon");

	if (menu) {
		menuDropdown.classList.add("active");
		backgroundBlur.classList.add("active");
	}

	const closeIcon = event.target.matches(".close-icon");

	if (closeIcon) {
		menuDropdown.classList.remove("active");
		backgroundBlur.classList.remove("active");
	}

	const itemList = event.target.matches(".itemBy");

	let currentItemList;

	if (itemList) {
		currentItemList = event.target.closest(".menu-item");
		currentItemList.classList.toggle("active");
	}
});
