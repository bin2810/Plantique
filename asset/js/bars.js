$(function () {
    $('#bars').click(function () {
        $(".nav-category").addClass('show-nav');
        $(".nav-category").css("transition", "transform 1s ease-in-out");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".nav-category, #bars").length) {
            $(".nav-category").removeClass('show-nav');
        $(".nav-category").css("transition", "transform 0.2s ease-out");

        }   
    });
});




$(function () {
    if (window.innerWidth <= 1024) { 
        $(".menu-list").css("pointer-events", "auto");
        $(".dropdown").hide(); 

        $('.menu-item').click(function () {
            // Đóng tất cả dropdown khác
            // $(".dropdown").not($(this).next()).slideUp();
            $(this).next(".dropdown").slideToggle();
        });
    }
});
