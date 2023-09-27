const cronometro = document.querySelector('#cronometro')
let contadorSegundos = 0
let contadorMinutos = 0
let timer = null

timer = setInterval(() => {
  if (contadorSegundos > 59) {
    contadorSegundos = 0
    contadorMinutos++
  }

  contadorMinutos === 2
    ? clearInterval(timer)
    : false

  let segundos = contadorSegundos < 10
    ? `0${contadorSegundos}`
    : contadorSegundos
  let minutos = contadorMinutos < 10
    ? `0${contadorMinutos}`
    : contadorMinutos

  cronometro.innerHTML = `<span id="minutos">${minutos}</span>:<span id="segundos">${segundos}</span>`

  contadorSegundos++
}, 1000);
