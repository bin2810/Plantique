const menus = [
    { id: "TV", dropdown: "thucvat" },
    { id: "CCCC", dropdown: "congcuchamsoc" },
    { id: "QT", dropdown: "quatang" },
    { id: "KP", dropdown: "khampha" }
];

const bg = document.querySelector(".dropdown");

menus.forEach(menu => {
    const menuItem = document.getElementById(menu.id);
    const dropdown = document.getElementById(menu.dropdown);

    if (menuItem && dropdown) {
        menuItem.addEventListener("mouseenter", function () {
            bg.style.display = "block";
            dropdown.style.display = "flex";
        });

        menuItem.addEventListener("mouseleave", function (event) {
            if (!dropdown.contains(event.relatedTarget)) {
                dropdown.style.display = "none";
                bg.style.display = "none";
            }
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdown.style.display = "none";
            bg.style.display = "none";
        });
    }
});
