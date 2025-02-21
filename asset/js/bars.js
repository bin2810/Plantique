$(function () {
    // Mở sidebar khi bấm nút #bars
    $('#bars').click(function () {
        $(".nav-category").addClass('show-nav');
    });

    // Đóng sidebar khi bấm ngoài
    $(document).click(function (event) {
        if ($(".nav-category").hasClass("show-nav") && !$(event.target).closest(".nav-category, #bars").length) {
            $(".nav-category").removeClass("show-nav");
        }
    });

    // Hàm xử lý dropdown theo kích thước màn hình
    function handleDropdown() {
        if (window.innerWidth <= 1070) {
            $(".dropdown").hide(); // Ẩn dropdown khi nhỏ hơn 1024px
            $('.menu-item').off("click").on("click", function () {
                $(".dropdown").not($(this).next()).slideUp();
                $(this).next(".dropdown").slideToggle();
            });
        } else {
            $(".dropdown").css("display", ""); // Reset về CSS mặc định để tránh lỗi
            $('.menu-item').off("click"); // Xóa sự kiện click khi màn hình lớn
        }
    }

    // Gọi hàm kiểm tra ngay khi tải trang
    handleDropdown();

    // Kiểm tra lại khi resize màn hình
    $(window).resize(function () {
        handleDropdown();
    });
});
