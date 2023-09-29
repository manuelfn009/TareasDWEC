let div = document.createElement("div");
let table = document.createElement("table");
let button = document.createElement("button");
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let th1 = document.createElement("th");
let th2 = document.createElement("th");

div.className = "div1";
table.className = "tabla";
button.className = "button-85";
button.innerHTML = "Generar";
button.addEventListener("click", boton);
th1.innerHTML = "Nombre";
th2.innerHTML = "Edad";

document.body.appendChild(div);
div.append(table, button);
table.append(tr1, tr2);
tr1.append(th1, th2);

function nombreAlAzar(nombres) {
  // Genera un índice aleatorio basado en la longitud de la lista de nombres
  const index = Math.floor(Math.random() * nombres.length);

  let newRow = table.insertRow(1);

  newRow.insertCell(0).append((td1.textContent = nombres[index]));
  newRow
    .insertCell(1)
    .append((td2.textContent = Math.floor(Math.random() * 100)));
}

function boton() {
  //Lista de nombres
  const listaDeNombres = ["Manuel", "Marta", "Juan", "Jose"];

  //Llama a la función y muestra el nombre aleatorio en la consola
  const nombreAleatorio = nombreAlAzar(listaDeNombres);
  console.log(nombreAleatorio);
}
