// Toggle Mobile Navbar
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Simple Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    this.reset();
});
