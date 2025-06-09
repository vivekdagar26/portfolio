// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// On load, apply saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
// Email validation
document.querySelector("form").addEventListener("submit", function(e) {
  const emailInput = document.querySelector('input[name="email"]');
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.classList.add("error");
    e.preventDefault();
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
  }
});

document.querySelector('input[name="email"]').addEventListener("input", function() {
  this.classList.remove("error", "success");
});

