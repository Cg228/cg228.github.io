// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const buffer = 150; 

    return (
        rect.top + buffer <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left >= 0 &&
        rect.bottom - buffer >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add class to items when they come into view
function checkTimelineVisibility() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', checkTimelineVisibility);

// Initial check in case the user lands on the page already scrolled down
document.addEventListener('DOMContentLoaded', checkTimelineVisibility);
