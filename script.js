const navBar = document.querySelector("#nav-bar");
const hamburguerBtn = document.querySelector("#hamburguer-btn");
const hamburguerBtnLine = document.querySelectorAll(".hamburguer-btn__line");

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

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navBar.classList.remove("open");
    hamburguerBtn.classList.add("open-menu");
    hamburguerBtnLine.forEach(btnLine => {
		btnLine.classList.remove("active");
	})
  });
});

const copierBtns = document.querySelectorAll(".code-copier");

copierBtns.forEach(copierBtn => {
	copierBtn.addEventListener("click", () => {
		let code = event.target.closest("code").querySelector("span").innerText;
    navigator.clipboard.writeText(code);
    let copied = event.target.closest("code").querySelector(".copied-to-clipboard");
    copied.style.cssText = `
		display: inline-block;
		top: -64px`;
    setTimeout(function() {
      copied.style.cssText = `
    	display: none;
    	top: unset`;
    }, 1000);
	})
})