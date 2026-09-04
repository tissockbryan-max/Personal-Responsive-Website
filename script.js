const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".bar");
const menuLinks = document.querySelectorAll("#main-menu a");

function closeMenu() {
  navbar.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  menuToggle.querySelector("i").classList.replace("fa-xmark", "fa-bars");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("menu-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  menuToggle.querySelector("i").classList.toggle("fa-bars", !isOpen);
  menuToggle.querySelector("i").classList.toggle("fa-xmark", isOpen);
});

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target)) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});
