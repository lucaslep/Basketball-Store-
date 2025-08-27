// Mensagem no console
console.log("LojaBasket carregada!");

// Menu ativo ao rolar a página
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("header .menu a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 70;
  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      menuLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Scroll suave para links do menu
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in animado para produtos ao rolar
const productCards = document.querySelectorAll(".product-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);
productCards.forEach((card) => observer.observe(card));

// Efeito botão "voltar ao topo"
const btnTop = document.createElement("button");
btnTop.textContent = "⬆";
btnTop.id = "btnTop";
document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// Função de envio para WhatsApp
function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '5511972802912';

  const texto = `Olá! Me chamo ${nome}, meu email é ${email}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, '_blank');
}
