let swiper = new Swiper(".portfolio-container", {
	cssMode: true,
	loop:true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

window.addEventListener("scroll",() => {
	const navigation = document.querySelector(".main-nav");
	navigation.classList.toggle("sticky",window.scrollY > 100);
})

  
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
	if(window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});
