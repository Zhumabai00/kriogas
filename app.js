let bool = true;
const mybtn = document.querySelector('.burger-btn')
const show = document.querySelector('.nav-menu')

mybtn.addEventListener('click', () => {
	if (bool) {
		show.classList.add("active")
		bool = !bool
	} else {
		show.classList.remove("active")
		bool = !bool
	}
})
