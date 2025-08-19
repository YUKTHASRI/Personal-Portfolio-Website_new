document.addEventListener("DOMContentLoaded", () => {
  // Toggle Mobile Navbar
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      console.log("Hamburger clicked ✅"); // Debug
      navLinks.classList.toggle("active");
      console.log("Menu classes:", navLinks.className); // Debug
    });
  } else {
    console.error("❌ Either #hamburger or #nav-links not found in DOM.");
  }

  // Simple Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out! I will get back to you soon.");
      this.reset();
    });
  }
});
