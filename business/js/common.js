$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1
    });
  });

  
// navbar
(function($){
	$(function() {
	  $('.menu__icon').on('click', function() {
		$(this).closest('.menu').toggleClass('menu_state_open');
	  });
	});
  })(jQuery);


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 400) {
      document.getElementById('anchor').style.cssText = ' transition: 1.5s; display: block;';

    } else {
        document.getElementById('anchor').style.display = '';
    }
};