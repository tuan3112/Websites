// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
  // Example: Smooth scrolling for navigation
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    });
  });

  // Add more functionality as needed
});
