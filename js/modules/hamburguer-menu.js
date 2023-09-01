// Ativa as funções do menu hamburguer
export default function ativaHamburguer() {
  const hamburguerMenu = document.querySelector(".hamburguer-nav"); //Seleciona a classe .hamburguer-nav
  const linksMenu = document.querySelector(".menu-link"); //seleciona o menu principal do site

  //Com o acionamento da função, adiciona a classe ativo no HTML e aciona o CSS com classe ativo
  function ativaMenu(event) {
    linksMenu.classList.toggle("ativo");
    hamburguerMenu.classList.toggle("ativo");
  }

  hamburguerMenu.addEventListener("click", ativaMenu); //Adiciona um listener de clique e tem como callback a função ativaMenu
}
