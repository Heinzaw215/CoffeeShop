// Get the button
const topButton = document.getElementById("top-btn");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
};

// Scroll to the top when the button is clicked
topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
};
