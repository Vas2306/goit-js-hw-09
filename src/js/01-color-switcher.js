console.log('Hello');
const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

const COLOR_CHANGE_DELAY = 1000;
let timerId = null;
refs.btnStart.disabled = false;
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onStartBtnClick);
refs.btnStop.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  timerId = setInterval(changeBackgroudColor, COLOR_CHANGE_DELAY);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}
function changeBackgroudColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onStopBtnClick() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(timerId);
}
