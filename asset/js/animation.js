$(document).ready(function () {
    function checkScroll() {
        $(".box").each(function () {
            let boxTop = $(this).offset().top;
            let scrollPos = $(window).scrollTop();
            let windowHeight = $(window).height();

            if (boxTop < scrollPos + windowHeight - 100) { 
                $(this).addClass("show");
            }
        });
    }

    $(window).on("scroll", checkScroll);
    checkScroll(); // Kiểm tra khi tải trang
});