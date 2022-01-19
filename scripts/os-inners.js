const container = document.getElementById("container");
const textContainer = container.textContent;


console.log(textContainer);

// O innerText coloca EXATAMENTE O QUE VC DIGITOU COMO TEXTO, e não como html.
// container.innerText = "<p>Oi oi oi</p>";
// A gente não costuma usar innerText em elementos de
// bloco (div, section, aside), a gente usa em elementos
// de texto (p, h1, h2, span)

// O innerHTML coloca o que vc digitou, e interpreta como HTML
// container.innerHTML = "<p>Oi oi oi</p>";
// Normalmente usamos em elementos de bloco (div, section, aside)
// para acrescentar outras tags html
