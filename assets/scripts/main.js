const menu = document.getElementById('menu');
const mainLeftNav = document.getElementById('main-left-nav');
const mainLoader = document.getElementById('main-loader');
const mainWrapper = document.getElementById('main-wrapper');

mainWrapper.style.top = "100vh";

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

function hideElements(containerId) {
    const elementsToHide = document.querySelectorAll(`#${containerId} *`);
    elementsToHide.forEach((element, index) => {
        if (index > 0) {
            element.classList.add('hidden');
        }
    });
}

hideElements('main-informative');
hideElements('main-showcase');
hideElements('main-pricing');
hideElements('main-skills');
hideElements('main-samples');
hideElements('main-contact');

document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = document.querySelectorAll(".lazy-load");

    lazyImages.forEach(function (lazyImage) {
        lazyImage.setAttribute("loading", "lazy");
        lazyImage.src = lazyImage.dataset.src;
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    setTimeout(() => {
        mainLoader.style.top = "40px";
        setTimeout(() => {
            mainLoader.style.top = "-100vh";
            mainWrapper.style.top = "0";
            setTimeout(() => {
                document.body.style.overflowY = "auto";
                mainLoader.outerHTML = "";
            }, 400);
        }, 1000);
    }, 2000);
});

function handleAnimation(entries, observer) {
    entries.forEach(entry => {
        const children = entry.target.querySelectorAll('*');
        if (entry.isIntersecting) {
            let interval = 100;
            children.forEach(child => {
                setTimeout(() => {
                    child.classList.add('animate');
                }, interval);
                interval += 40;
            });
            //observer.unobserve(entry.target);
        }
        else {
            children.forEach(child => {
                child.classList.remove('animate');
            });
        }
    });
}

const observer = new IntersectionObserver(handleAnimation, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
});

observer.observe(document.getElementById('main-informative'));
observer.observe(document.getElementById('main-showcase'));
observer.observe(document.getElementById('main-pricing'));
observer.observe(document.getElementById('main-skills'));
observer.observe(document.getElementById('main-samples'));
observer.observe(document.getElementById('main-contact'));

document.getElementById('main-informative').style.opacity = '1';
document.getElementById('main-showcase').style.opacity = '1';