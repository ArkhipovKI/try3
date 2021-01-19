// init Swiper:


let fullSlider = document.querySelector('.button-all');

let text = fullSlider.textContent;
let butn = document.getElementById('btn');
let slider = document.querySelector('.slider-container');
let wrapper = document.querySelector('.swiper-wrapper');
let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 700 && slider.dataset.mobile == "false") {
		mySwiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 10,
			loop: true,
			keyboard: {
				enabled: true,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
		slider.dataset.mobile = "true";
		console.log(slider.dataset.mobile);
	}

	if (window.innerWidth > 700) {
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

fullSlider.addEventListener('click', function () {
	let toggle = slider.classList.toggle('slider-full');
	if (toggle) {
		fullSlider.textContent = 'Скрыть всё';
		rotateArrow();
	}
	else {
		fullSlider.textContent = text;
		butn.className = "";
	}
});

let rotateArrow = function () {
	butn.className = "rotated";
	console.log(butn);
};





