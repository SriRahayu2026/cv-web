
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a");

// Mengatur menu navigasi mobile
menuButton.addEventListener("click", () => {
  const isExpanded =
    menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");

  menuButton.textContent = isExpanded ? "Menu" : "Tutup";
});

// Menutup menu setelah tautan dipilih
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
    navMenu.classList.remove("flex");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
});

// Menampilkan tahun secara otomatis
document.getElementById("year").textContent =
  new Date().getFullYear();

// Animasi ketika bagian halaman terlihat
const sections = document.querySelectorAll(
  "main > section"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}
