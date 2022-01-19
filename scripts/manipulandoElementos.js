const h1 = document.getElementById("main-title");
const button = document.getElementById("control-show");

// Alterar as classes do meu h1

// Muito duro, sem controle do usuário
//h1.classList.add("no-show");

// addEventListener - São como telefonista, ela fica vigiando um elemento
// Quando, o que ela estava esperando acontece, ela executa a callback para

// Recebe 2 parametros: evento e callback

h1.addEventListener("click", () => {
  h1.classList.toggle("destaque");
});