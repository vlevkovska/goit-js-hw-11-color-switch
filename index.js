const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const colorChange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timeoutID = null;

const refs = {
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
  background: document.querySelector('body'),
};

refs.buttonStop.addEventListener('click', changeStop);
refs.buttonStart.addEventListener('click', randomColor);

function randomColor() {
  timeoutID = setInterval(function () {
    const bgBody = colorChange(0, colors.length);
    refs.background.style.backgroundColor = colors[bgBody];
  }, 1000);
  if (refs.buttonStart) {
    refs.buttonStart.disabled = true;
  }
}

function changeStop() {
  //   refs.background.style = null;
  clearInterval(timeoutID);
  if (refs.buttonStop) {
    refs.buttonStart.disabled = false;
  }
}
