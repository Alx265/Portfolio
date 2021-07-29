// Portfolio swiper
let swiper = new Swiper(".portfolio-container", {
	cssMode: true,
	loop:true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Navigation scroll
window.addEventListener("scroll",() => {
	const navigation = document.querySelector(".main-nav");
	navigation.classList.toggle("sticky",window.scrollY > 100);
})

  
// toTop button
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
	if(window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});



// Animations
const sr = ScrollReveal({
	distance: '300px',
	duration: 1500,
	reset: true
})

// Header-content
sr.reveal('.text-hello', {origin:'left'});
sr.reveal('.text-name', {origin:'right', delay: 800, scale: 0.5});
sr.reveal('.text-frontend', {origin:'right', delay: 1600});
sr.reveal('.social', {origin:'left', delay: 2000});
sr.reveal('#header-social', {origin:'left', delay: 2000});

// About
sr.reveal('.about-me', {origin:'top'});
sr.reveal('.about-photo', {origin:'left',delay: 800});
sr.reveal('.about-text', {origin:'right',delay: 800});

// Skills
sr.reveal('.skills', {origin:'top'});;
sr.reveal('.items-container', {origin:'right',delay: 800});

// Portfolio 
sr.reveal('.portfolio', {origin:'top'});;
sr.reveal('.portfolio-container', {origin:'bottom',delay: 800});




