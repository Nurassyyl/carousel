const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let position = 1;
const size = carouselImages[0].clientWidth;
carousel.style.transform = "translateX(" + (-size * position) + "px)";

prevBtn.addEventListener('click', () => {
    if (position <= 0) return;
    carousel.style.transition = "transform .7s";
    position--; 
    carousel.style.transform = "translateX(" + (-size * position) + "px)";
})

nextBtn.addEventListener('click', () => {
    if (position >= carouselImages.length - 1) return;
    carousel.style.transition = "transform .7s";
    position++; 
    carousel.style.transform = "translateX(" + (-size * position) + "px)";
})

carousel.addEventListener('transitionend', () => {
    if(carouselImages[position].id === "lastClone") {
        carousel.style.transition = "none";
        position = carouselImages.length - 2;
        carousel.style.transform = "translateX(" + (-size * position) + "px)";
    } else if (carouselImages[position].id === "firstClone") {
        carousel.style.transition = "none";
        position = carouselImages.length - position;
        carousel.style.transform = "translateX(" + (-size * position) + "px)";
    }
})