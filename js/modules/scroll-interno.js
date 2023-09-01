// Ativa as funções do scroll interno do site, que dependendo da altura de cada seção do site, uma função é ativada
export default function scrollInterno() {
  const slideSuave = document.querySelectorAll(".js-scroll"); //Seleciona todas as section com a classe .js-scroll

  //Com o acionamento da função, para cada section com a classe .js-scroll, o windows pega a altura que cada section tem com o topo.
  function ativaScroll(event) {
    slideSuave.forEach((item) => {
      const topo = item.getBoundingClientRect().top;
      //Caso a altura seja menor que 600, adicionara a classe ativo, que disparará as estilizações do css
      if (topo < 600) {
        item.classList.add("ativo");
      }
    });
  }
  window.addEventListener("scroll", ativaScroll); //Adciciona o listener direto na window que ao scrollar a página, a função ativaScroll é acionada.
}
