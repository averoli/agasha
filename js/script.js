$(document).ready(function () {
    $('.slider').slick({
        // dots: true,
        // arrows: false,
        // infinite: false,
        // speed: 300,
        // slidesToShow: 3,
        // slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 375,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });
});