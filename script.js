const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");
botaoMenu.addEventListener("click", function () {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});
