$(".team-carousel").slick({
	arrows: false,
	autoplay: true,
	slidesToShow: 2,
	slidesToScroll: 2,
    mobileFirst: true,
    responsive: [

{
    breakpoint: 768, 
    settings: {
        slidesToShow: 3
    },
},
{
    breakpoint: 992, 
    settings: {
        slidesToShow: 4,
    },
}

    ]
});
