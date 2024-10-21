// Add smooth scrolling to the top
document.getElementById('top-btn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show or hide button on scroll
window.addEventListener('scroll', () => {
    const topBtn = document.getElementById('top-btn');
    if (window.scrollY > 300) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

