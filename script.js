const navBar = document.querySelector("#nav-bar");
const hamburguerBtn = document.querySelector("#hamburguer-btn");
const navLinks = document.querySelectorAll(".nav-link");
const hamburguerBtnLine = document.querySelectorAll(".hamburguer-btn__line")

hamburguerBtn.addEventListener("click", () => {
	if (hamburguerBtn.classList.contains("open-menu")) {
		navBar.classList.add("open");
		hamburguerBtn.classList.remove("open-menu")
		hamburguerBtnLine.forEach(btnLine => {
			btnLine.classList.add("active");
		})
	}
	else {
		navBar.classList.remove("open");
		hamburguerBtn.classList.add("open-menu");
		hamburguerBtnLine.forEach(btnLine => {
			btnLine.classList.remove("active");
		})
	}
})

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navBar.classList.remove("open");
    hamburguerBtn.classList.add("open-menu");
    hamburguerBtnLine.forEach(btnLine => {
		btnLine.classList.remove("active");
	})
  });
});