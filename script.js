// Typing Effect
const text = "Vivek Dagar | ERP Developer";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "☀️";  // Sun icon for light mode (means toggle to light)
  } else {
    themeToggleBtn.textContent = "🌙";  // Moon icon for dark mode
  }
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  const email = document.querySelector('input[name="email"]').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});





