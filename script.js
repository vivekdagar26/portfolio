// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
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

