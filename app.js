setInterval(setClock, 1000);

const handHour = document.querySelector('[data-hand-hour]')
const handMinute = document.querySelector('[data-hand-minute]')
const handSecond = document.querySelector('[data-hand-second]')

function setClock () {
    const date = new Date();
    const secondsRatio = date.getSeconds() / 60;
    const minuteRatio = (secondsRatio + date.getMinutes()) / 60;
    const hourRatio = (minuteRatio + date.getHours()) / 12;

    setRotation(handSecond, secondsRatio);
    setRotation(handMinute, minuteRatio);
    setRotation(handHour, hourRatio);
}

function setRotation (element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();