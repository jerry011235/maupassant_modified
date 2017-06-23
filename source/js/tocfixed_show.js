$(window).scroll(function() {
    $(window).scrollTop() > 200 ? $("#toc").addClass("fixed_show") : $("#toc").removeClass("fixed_show");
});
