// Add this JavaScript to your existing script.js or a separate JavaScript file

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".swiper-slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});





