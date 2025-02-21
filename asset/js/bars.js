$(function () {
    $('#bars').click(function () {
        $(".nav-category").addClass('show-nav');
    });

    $(document).click(function (event) {
        if ($(".nav-category").hasClass("show-nav") && !$(event.target).closest(".nav-category, #bars").length) {
            $(".nav-category").removeClass("show-nav");
        }
    });

    function handleDropdown() {
        if (window.innerWidth <= 1070) {
            $(".dropdown").hide(); 
            $('.menu-item').off("click").on("click", function () {
                $(".dropdown").not($(this).next()).slideUp();
                $(this).next(".dropdown").slideToggle();
            });
        } else {
            $(".dropdown").css("display", ""); 
            $('.menu-item').off("click"); 
        }
    }

    handleDropdown();

    $(window).resize(function () {
        handleDropdown();
    });
});
