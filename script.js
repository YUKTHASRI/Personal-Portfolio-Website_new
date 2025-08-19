document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-links");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      console.log("Hamburger clicked ✅"); // Debug
      navMenu.classList.toggle("active");
      console.log("Menu classes:", navMenu.className); // Debug
    });
  } else {
    console.error("❌ Either #hamburger or #nav-links not found in DOM.");
  }
});
