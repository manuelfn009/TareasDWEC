function nombreAlAzar(nombres) {
  var h1 = document.getElementById("h1");

  // Genera un índice aleatorio basado en la longitud de la lista de nombres
  const index = Math.floor(Math.random() * nombres.length);
  h1.innerHTML = nombres[index];

  // Retorna el nombre correspondiente al índice aleatorio
  return nombres[index];
}

function boton() {
  //Lista de nombres
  const listaDeNombres = ["Manuel", "Marta", "Juan", "Jose"];

  //Llama a la función y muestra el nombre aleatorio en la consola
  const nombreAleatorio = nombreAlAzar(listaDeNombres);
  console.log(nombreAleatorio);
}
