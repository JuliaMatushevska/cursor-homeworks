'use strict';
console.log('test');


$(document).ready(function() {
    $('.review-slider').slick({
        autoplay:true,
        nextArrow:'.bg-arrow_right',
        prevArrow:'.bg-arrow_left',

    });
});


window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

      
