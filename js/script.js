// Aquí tu código

const agregarTexto = document.getElementById("agregar");
const lista = document.getElementById("lista");

agregarTexto.addEventListener("click", function () {
  const pregunta = prompt("Ingrese el texto que desea agregar a la lista:");
  if (pregunta) {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = pregunta;
    lista.appendChild(elementoLista);
  }
});
