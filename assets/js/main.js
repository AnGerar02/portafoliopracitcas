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

// Filtro de piezas
const filters = document.querySelectorAll(".filter");
const pieces = document.querySelectorAll(".piece");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;
    filters.forEach((b) => b.classList.toggle("is-active", b === btn));
    pieces.forEach((piece) => {
      piece.classList.toggle("is-hidden", type !== "todo" && piece.dataset.type !== type);
    });
  });
});

// Año del footer
document.getElementById("year").textContent = new Date().getFullYear();
