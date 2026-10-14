// Menu do celular: o botão abre e fecha o menu.
// Tudo que o site faz de interativo está neste arquivo.

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");

// Clicar no botão alterna a classe "aberto" (o CSS decide o que ela mostra)
botaoMenu.addEventListener("click", function () {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});

// Clicar em um link do menu fecha o menu
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});