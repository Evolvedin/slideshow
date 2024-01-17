document.addEventListener("DOMContentLoaded", function() {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const gradients = [
        "linear-gradient(45deg, #663399, #8e44ad)",
        "linear-gradient(45deg, #3498db, #2980b9)",
        "linear-gradient(45deg, #2ecc71, #27ae60)",
        "linear-gradient(45deg, #e74c3c, #c0392b)",
        "linear-gradient(45deg, #f39c12, #d35400)",
        "linear-gradient(45deg, #9b59b6, #e74c3c)"
    ];

    function hideAllSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    }

    function showSlide(index) {
        if (index >= 0 && index < slides.length) {
            hideAllSlides();
            slides[index].style.display = 'block';
            document.body.style.background = gradients[index];
        }
    }

    function updateBackgroundGradient() {
        document.body.style.background = gradients[currentSlideIndex];
    }

    prevButton.addEventListener('click', function() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
        updateBackgroundGradient();
    });

    nextButton.addEventListener('click', function() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
        updateBackgroundGradient();
    });

    // Initialize first slide
    showSlide(currentSlideIndex);
});






















