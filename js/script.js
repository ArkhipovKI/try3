
// init Swiper:


// let fullSlider = document.querySelector('.button-all');

// let text = fullSlider.textContent;
// let butn = document.getElementById('btn');
let slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile == "false") {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
		});
		slider.dataset.mobile = "true";
		console.log(slider.dataset.mobile);
	}

	if (window.innerWidth > 600) {
		slider.dataset.mobile = "false";
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', function () {
	mobileSlider();
});

// fullSlider.addEventListener('click', function () {
// 	let toggle = slider.classList.toggle('slider-full');
// 	if (toggle) {
// 		fullSlider.textContent = 'Скрыть всё';
// 		rotateArrow();
// 	}
// 	else {
// 		fullSlider.textContent = text;
// 		butn.className = "";
// 	}
// });

// let rotateArrow = function () {
// 	butn.className = "rotated";
// 	console.log(butn);
// };





