// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  nav.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Año del footer
document.getElementById("year").textContent = new Date().getFullYear();
