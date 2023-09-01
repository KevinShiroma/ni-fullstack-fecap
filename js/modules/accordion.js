// Ativa as funções das perguntas frequentes
export default function accordion() {
  const accordion = document.querySelectorAll("dt"); //Seleciona todos os dt's do HTML

  // A função adiciona a classe ativo no dd(next Sibling) e no dd clicado
  function abreResposta(event) {
    event.currentTarget.nextElementSibling.classList.toggle("ativo");
    event.currentTarget.classList.toggle("ativo");
  }

  accordion.forEach((item) => {
    item.addEventListener("click", abreResposta); //Para cada dt, ativa um listener de clique, que tem como callback a função abreResposta
  });
}
