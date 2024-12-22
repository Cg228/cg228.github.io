// script.js

// Add class to items when they come into view
function checkTimelineVisibility() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

window.onload = function() {
    checkTimelineVisibility();  // Check visibility after the entire page has loaded
};

window.addEventListener('scroll', checkTimelineVisibility);
