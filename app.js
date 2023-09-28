const cronometro = document.querySelector('[data-js="cronometer"]')
let incrementedCountSeconds = 0
let incrementedCountMinutes = 0
let timer = null

const incrementAndShowCronometer = () => {
  if (incrementedCountSeconds > 59) {
    incrementedCountSeconds = 0
    incrementedCountMinutes++
  }

  incrementedCountMinutes === 90
    ? clearInterval(timer)
    : false

  let seconds = incrementedCountSeconds < 10
    ? `0${incrementedCountSeconds}`
    : incrementedCountSeconds
  let minutes = incrementedCountMinutes < 10
    ? `0${incrementedCountMinutes}`
    : incrementedCountMinutes

  cronometro.innerHTML = `<span id="minutes">${minutes}</span>:<span id="seconds">${seconds}</span>`

  incrementedCountSeconds++
}

incrementAndShowCronometer()

timer = setInterval(incrementAndShowCronometer, 1000);
