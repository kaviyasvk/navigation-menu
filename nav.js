// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
const body = document.body;

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change icon dynamically
  if (body.classList.contains("dark-mode")) {
    darkToggle.textContent = "☀️"; // Light mode icon
  } else {
    darkToggle.textContent = "🌙"; // Dark mode icon
  }
});

console.log("Navigation and Dark Mode Ready!");
