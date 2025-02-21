window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var banner = document.querySelector(".banner");
    if (window.scrollY > 1) { 
        navbar.style.position = "fixed";
        navbar.style.top = "0rem";
        banner.style.margin = "0";
    } else {
        navbar.style.top = "5rem";
        banner.style.margin = "6rem 0 0 0" ;

    }
});

