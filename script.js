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
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Surprise Button
document.getElementById("surprise-btn").addEventListener("click", () => {
  alert("You're awesome! 💫 Keep shining ✨");
});

// Star Mode
let starsActive = false;
document.getElementById("star-toggle").addEventListener("click", () => {
  starsActive = !starsActive;
  if (starsActive) startStars();
});

function startStars() {
  if (!starsActive) return;

  const star = document.createElement("div");
  star.classList.add("star");
  star.textContent = ["⭐️", "🌟", "✨", "💫"][Math.floor(Math.random() * 4)];
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.color = ["#FFD700", "#FFFFFF", "#FFA500"][Math.floor(Math.random() * 3)];
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 2000);
  setTimeout(startStars, 200);
}

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  const email = document.querySelector('input[name="email"]').value;
  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    e.preventDefault();
  }
});




