'use strict';
console.log('test');

$('.review-slider').slick({
    infinite: true,
    loop:true,

});

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

      