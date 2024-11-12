document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
        });

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.opacity = '1';
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    showSlides();
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobliemmenu);

function mobliemmenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}







let index = 0;
let interval;

// Function to show testimonial by index
function showTestimonial(index) {
    const slider = document.getElementById('testimonialSlider');
    slider.style.transform = 'translateX(' + (-index * 100 / 3) + '%)';
}

// Function for previous testimonial
function prevTestimonial() {
    index = (index > 0) ? index - 1 : 5;  // Adjust based on number of testimonials
    showTestimonial(index);
}

// Function for next testimonial
function nextTestimonial() {
    index = (index < 5) ? index + 1 : 0;  // Adjust based on number of testimonials
    showTestimonial(index);
}

// Auto-slide function
function startAutoSlide() {
    interval = setInterval(() => {
        nextTestimonial();
    }, 3000);
}

// Stop auto-slide on hover
document.getElementById('testimonialSlider').addEventListener('mouseenter', function() {
    clearInterval(interval);
});

// Resume auto-slide when not hovering
document.getElementById('testimonialSlider').addEventListener('mouseleave', function() {
    startAutoSlide();
});

// Event listeners for buttons
document.getElementById('prevTestimonial').addEventListener('click', function() {
    clearInterval(interval); // Stop auto-slide when using manual navigation
    prevTestimonial();
    startAutoSlide(); // Resume auto-slide after manual interaction
});

document.getElementById('nextTestimonial').addEventListener('click', function() {
    clearInterval(interval); // Stop auto-slide when using manual navigation
    nextTestimonial();
    startAutoSlide(); // Resume auto-slide after manual interaction
});

// Start auto-slide when page loads
startAutoSlide();
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const fullDescription = card.querySelector('.full-description');
        fullDescription.style.display = 'block'; // Show full description
    });

    card.addEventListener('mouseleave', () => {
        const fullDescription = card.querySelector('.full-description');
        fullDescription.style.display = 'none'; // Hide full description
    });
});

