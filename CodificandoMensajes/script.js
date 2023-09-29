let sign = prompt("Introduce el mensaje que quieras cifrar");
const espacioVacio = document.createElement("div");
document.body.appendChild(espacioVacio);
let h1 = document.createElement("h1");


function cifrar(palabra, desplazamiento) {
  // Definir el alfabeto
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  let palabraCifrada = "";

  // Iterar a través de cada carácter de la palabra
  for (let i = 0; i < palabra.length; i++) {
    const caracter = palabra[i];

    if (caracter === "z" || caracter === "Z") {
      palabraCifrada += "a";
    } else if (caracter === " ") {
      // Verificar si el carácter es un espacio en blanco
      palabraCifrada += " "; // Mantener el espacio en blanco en la palabra cifrada
    } else if (!isNaN(parseInt(caracter))) {
      // Verificar si el carácter es un número
      let numeroCifrado = parseInt(caracter) + 1;

      if (numeroCifrado === 10) {
        numeroCifrado = 0;
      }

      palabraCifrada += numeroCifrado.toString();
    } else {
      // Si el carácter no es un número ni un espacio en blanco, cifrarlo normalmente
      const codigoAscii = caracter.charCodeAt(0);
      const codigoCifrado = codigoAscii + desplazamiento;
      palabraCifrada += String.fromCharCode(codigoCifrado);
      
    }
    
  }
  return "Mensaje cifrado: " + palabraCifrada;
}

espacioVacio.appendChild(h1);
  // Convertir la palabra a mayúsculas para asegurarse de que las letras coincidan con el alfabeto
h1.textContent = cifrar(sign, 1).toUpperCase();

// "https://acortar.link/EAzEyU",
// "https://acortar.link/CT4ZeT",

let indiceImagenActual = 0;
let imagenC = document.getElementById("imgCmb");
imagenC.src = "https://acortar.link/vixRdx";

function cambiarImagen() {
  if(indiceImagenActual === 1){
    imagenC.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Logotipo_del_Gobierno_de_Espa%C3%B1a.svg/1200px-Logotipo_del_Gobierno_de_Espa%C3%B1a.svg.png";
    indiceImagenActual = 0;
  }else {
    imagenC.src = "https://acortar.link/vixRdx";
    indiceImagenActual = 1;
  }
}

imagenC.addEventListener("click", cambiarImagen);

