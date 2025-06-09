// Typing effect
const msg = "Hi, I'm Vivek – a passionate ERP Developer who believes in code, coffee & connection.";
let i = 0;
function typeEffect() {
  if (i < msg.length) {
    document.getElementById("typewriter").textContent += msg.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
window.onload = typeEffect;

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.onclick = () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};

// Surprise message
document.getElementById("surprise-btn").onclick = () => {
  const quotes = [
    "You're doing amazing!",
    "Keep smiling, you're magic ✨"
  ];
  alert(quotes[Math.floor(Math.random() * quotes.length)]);
};

// Heartfall animation
let heartInterval;
document.getElementById("heart-toggle").onclick = () => {
  if (heartInterval) {
    clearInterval(heartInterval);
    heartInterval = null;
    return;
  }
  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.innerText = "❤️";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 300);
};

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  const email = this.email.value;
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});


