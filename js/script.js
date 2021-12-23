/* variables */
const hora = document.querySelector("#hora");
const minuto = document.querySelector("#minutos");
const segundo = document.querySelector("#segundos");

/* setInterval - guardamos en una variable para poder tener el numero de proceso*/
const actualizarHora = setInterval(function() {

    const date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    // horas
    if (horas.toString().length === 1) {
        hora.innerHTML = "0" + horas;
    } else {
        hora.innerHTML = horas;
    }

    // minutos
    if (minutos.toString().length === 1) {
        minuto.innerHTML = "0" + minutos;
    } else {
        minuto.innerHTML = minutos;
    }

    // segundos
    if (segundos.toString().length === 1) {
        segundo.innerHTML = "0" + segundos;
    } else {
        segundo.innerHTML = segundos;
    }

    /* metodo corto! */
    //hora.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

}, 1000);

/* para eliminar proceso de intervalo */
//clearInterval(actualizarHora);