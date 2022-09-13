let draw = document.querySelector("#draw");
let sort = document.querySelector("#sort");
let generateCards = document.getElementById("generateCards");
let bubbleLog = document.getElementById("bubbleLog");
let listaCartas = [];

// Generar Pinta y Numero
let randomCard = () => {
  let Pinta = ["spades", "hearts", "diamonds", "cubs"];
  let Numero = Math.floor(Math.random() * 12) + 1;
  let pintaRandom = Math.floor(Math.random() * Pinta.length);
  let datos = {
    number: Numero,
    pinta: Pinta[pintaRandom]
  };
  listaCartas.push(datos);
  return datos;
};
