// 🌸 Smooth scroll for internal links (if you add #id links)
// 🌙 Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// 🌷 Fade-in animation on scroll
const faders = document.querySelectorAll(".project, .skill, .contact-item, section p");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add("fade-hidden");
  appearOnScroll.observe(fader);
});

// ⬆️ Back to top button (optional)
const backToTop = document.createElement('button');
backToTop.textContent = "↑";
backToTop.setAttribute('id', 'backToTop');
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #dcaac3;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: none;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
`;

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});