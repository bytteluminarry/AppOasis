const menu = document.getElementById('menu');
const mainLeftNav = document.getElementById('main-left-nav');

menu.onclick = () => {
    openLeftNav();
};

function openLeftNav() {
    mainLeftNav.style.visibility = "visible";
    mainLeftNav.style.opacity = "1";
    mainLeftNav.style.pointerEvents = "auto";

    mainLeftNav.querySelector('.inner').style.width = "80%";
}

function closeLeftNav() {
    setTimeout(() => {
        mainLeftNav.querySelector('.inner').style.width = "0";

        setTimeout(() => {
            mainLeftNav.style.opacity = "0";
            mainLeftNav.style.pointerEvents = "none";
            mainLeftNav.style.visibility = "hidden";
        }, 400);
    }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
        var lazyImages = document.querySelectorAll(".lazy-load");

        lazyImages.forEach(function (lazyImage) {
            lazyImage.setAttribute("loading", "lazy");
            lazyImage.src = lazyImage.dataset.src;
        });
    });
});
