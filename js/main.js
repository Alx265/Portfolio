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