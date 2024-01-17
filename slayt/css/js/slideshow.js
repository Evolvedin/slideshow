document.addEventListener("DOMContentLoaded", function() {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const footerElem = document.querySelector('footer');

    const colors = [
        "linear-gradient(to right, #6a3093, #a044ff)", 
        "linear-gradient(to right, #9932cc, #8a2be2)", 
        "linear-gradient(to right, #da70d6, #ff69b4)", 
        "linear-gradient(to right, #ff1493, #c71585)", 
        "linear-gradient(to right, #db7093, #ff82ab)",
        "linear-gradient(to right, #9400d3, #8b008b)"
    ];

    function hideAllSlides() {
        slides.forEach(slide => slide.style.display = 'none');
    }

    function showSlide(index) {
        if (index >= 0 && index < slides.length) {
            hideAllSlides();
            slides[index].style.display = 'block';
            let chosenColor = colors[index];
            document.body.style.backgroundImage = chosenColor;
            footerElem.style.backgroundImage = chosenColor;
        }
    }

    prevButton.addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    });

    nextButton.addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    });

    // Initialize the slideshow with the first slide
    showSlide(currentSlideIndex);
});



































