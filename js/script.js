let fullSlider = document.querySelector('.button-all');
let textButtonAll = fullSlider.textContent;
let slider = document.querySelector('.companies-list');
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
		fullSlider.classList.add('button-all-reverse');
		fullSlider.classList.remove('button-all');
	}
	else {
		fullSlider.textContent = textButtonAll;
		fullSlider.classList.add('button-all');
		fullSlider.classList.remove('button-all-reverse');
	}
});

/*let rotateArrow = function () {
	butn.className = "rotated";
	console.log(butn);
};*/





