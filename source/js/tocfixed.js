$(window).scroll(function() {
    $(window).scrollTop() > 200 ? $("#toc").addClass("fixed") : $("#toc").removeClass("fixed");
});
