// DOM - Document object model

// É uma forma de "traduzir o HTML"
// para um objeto JS

// Objeto > metodos, atributos

// console.log(document);

// Capturando elementos - getElement(s)By ...
// getElementById

// const mainTitle = document.getElementById("main-title");
// const inputText = document.getElementById("input-text");

// textContent vs value

// inputText.value = "Suco de morango";

// console.log(inputText.value);

// mainTitle.innerText = "Olá mundo";

// console.log(mainTitle.textContent);

// Para pegar e alterar o valor de tags de input, usamos o value

// innetHTML

// const container = document.getElementById("container");

// console.log(container);

// Jeito errado de colocar uma tag dentro de outra

// container.innerText = "<p>Oi oi oi, beleza?</p>";

// console.log(container.textContent);

// Jeito correto!

// container.innerHTML = "<p>Lorem ipsum dolor sit amet</p>";

// console.log(container.textContent);

// console.log(container.firstChild.textContent);

//getElementsByClassName

// const firstSection = document.getElementsByClassName("first-section");

// console.log(firstSection);

// Retornar uma HTML Collection > não é uma array
// Não da pra fazer map, filter

// Para percorrer, usamos o for

// querySelector e querySelectorAll
// Utilizam o seletor (o mesmo do CSS) para capturar o elemento

// o querySelector vai retornar sempre o primeiro elemento
// que tiver aquele seletor

// const h1 = document.querySelector(".first-section");

// console.log(h1);

// ja o querySelectorAll retornar todos

// const firstSection = document.querySelectorAll(".first-section");
// console.log(firstSection);

// HTML Collection vs NodeList vs Array


const userInput = document.getElementById("input-text");
const actionButton = document.getElementById("action-btn");
const div = document.getElementById("container");

actionButton.addEventListener("click", () => {
  const inputValue = userInput.value;

  div.innerHTML = inputValue;
});
