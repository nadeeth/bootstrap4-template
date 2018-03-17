

$(function () {

    $(document).scroll(function () {
        var $nav = $(".navbar.fixed-top");
        $nav.toggleClass('bg-dark', $(this).scrollTop() > $nav.height());
    });
    
});