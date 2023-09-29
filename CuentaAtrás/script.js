//declaracion de las letiables que se van a usar de estaciones
    let verano = new Date(2024, 6, 21);
    let invierno = new Date(2023, 12, 21);
    let otoño = new Date(2023, 9, 23);
    let primavera = new Date(2024, 3, 21);

//new Date(year, month, day, hours, minutes, seconds, milliseconds)
let cumpleanio = new Date(2023, 12, 10);
//actualiza el contador cada 1 segundos ( = 1000 milisegundos)
let actualiza = 1000;
// función que calcula y escribe el tiempo en días, horas, minutos y segundos
// que faltan para la letiable cumpleanio

function faltan() {
    let ahora = new Date();
    let faltan = cumpleanio - ahora;
    // si todavís no es cumpleanio
    if (faltan > 0) {
        let segundos = Math.round(faltan / 1000);
        let minutos = Math.floor(segundos / 60);
        let segundos_s = segundos % 60;
        let horas = Math.floor(minutos / 60);
        let minutos_s = minutos % 60;
        let dias = Math.floor(horas / 24);
        let horas_s = horas % 24;
        // escribe los resultados
        (segundos_s < 10) ? segundos_s = "0" + segundos_s : segundos_s = segundos_s;
        (minutos_s < 10) ? minutos_s = "0" + minutos_s : minutos_s = minutos_s;
        (horas_s < 10) ? horas_s = "0" + horas_s : horas_s = horas_s;
        (dias < 10) ? dias = "0" + dias : dias = dias;
        let resultado = dias + " Días     " + horas_s + " Horas     " + minutos_s + " Minutos     " + segundos_s + " Segundos";
        document.formulario.reloj.value = resultado;
        //actualiza el contador
        setTimeout("faltan()", actualiza);
    }
    // estamos en el cumpleanio 
    else {
        document.formulario.reloj.value = resultado + "¡FELICIDADES!";
    }
}

let indiceImagenActual = 0;
let imagen = document.getElementById("imagen");
let now = new Date();

    function cambiarImagen() {
      if(now <= verano){
        imagen.src="verano.png";
      }else if(now <= invierno){
        imagen.src="invierno.png";
      }else if(now <= otoño){
        imagen.src="otoño.png";
      }else if(now <= primavera){
        imagen.src="primavera.png";
      }else if(now === cumpleanio){
        imagen.src="cumpleaños.png";
      }
    }

    cambiarImagen();
faltan();