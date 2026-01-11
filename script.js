const text = "Creative Frontend Developer";
let index = 0;
const typingEl = document.querySelector(".typing");

function type() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(type, 90);
  }
}
type();

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});
