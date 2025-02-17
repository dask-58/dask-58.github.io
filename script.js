document.addEventListener("DOMContentLoaded", function () {
  const text = "dhruv koli";
  const span = document.getElementById("typewriter");
  let i = 0;
  span.innerText = "";
  function typeEffect() {
    if (i < text.length) {
      span.innerText += text[i];
      i++;
      setTimeout(typeEffect, 50);
    }
  }
  typeEffect();
});

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("time").textContent = timeString;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light",
  );
}

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.body.classList.add("dark-mode");

updateTime();
setInterval(updateTime, 1000);
