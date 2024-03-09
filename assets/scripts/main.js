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

const elementsToHide = document.querySelectorAll('#main-informative *');
elementsToHide.forEach((element, index) => {
    if (index > 0)
        element.classList.add('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = document.querySelectorAll(".lazy-load");

    lazyImages.forEach(function (lazyImage) {
        lazyImage.setAttribute("loading", "lazy");
        lazyImage.src = lazyImage.dataset.src;
    });
});

// Function to handle animation
function handleAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Select all children of main-informative and show them
            const children = entry.target.querySelectorAll('*');
            let interval = 100;
            children.forEach(child => {
                setTimeout(() => {
                    child.classList.add('animate');
                }, interval);
                interval += 40;
            });
            // Unobserve the target once animation is applied
            observer.unobserve(entry.target);
        }
    });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleAnimation, {
    root: null, // use the viewport as the root
    rootMargin: '0px', // no margin
    threshold: 0.3 // trigger when 30% of the element is visible
});

// Observe the main-informative section
observer.observe(document.getElementById('main-informative'));

// Show the main-informative section
document.getElementById('main-informative').style.opacity = '1';