const cronometro = document.querySelector('#cronometro')
let contadorSegundos = 0
let contadorMinutos = 0

setInterval(() => {
  let segundos = contadorSegundos < 10 ? `0${contadorSegundos}` : contadorSegundos
  let minutos = contadorMinutos < 10 ? `0${contadorMinutos}` : contadorMinutos

  if (contadorSegundos > 59) {
    contadorSegundos = 0
    contadorMinutos++
  }

  contadorSegundos++

  cronometro.innerHTML = `<span id="minutos">${minutos}</span>:<span id="segundos">${segundos}</span>`
}, 500);
