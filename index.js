

$('.scroll-nav').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(target).offset().top - 200
    }, 250);
});

$('.carousel').carousel({
    interval: false
});



// $('.scroll').on('click', function(e) {
// 	e.preventDefault();
// 	var target = $(this).attr('href');
// 	var offset = 0;
// 	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
// 	$.scrollTo(target, 300, { offset: -offset });
// });
