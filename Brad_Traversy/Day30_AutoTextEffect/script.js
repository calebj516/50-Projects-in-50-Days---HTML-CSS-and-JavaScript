const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const userInput = document.getElementById('inputText');
// const text = 'We Love Programming!';
const text = window.prompt("Please enter a message");

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {

  textEl.innerText = text.slice(0, idx);

  idx++;

  if(idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 100 / e.target.value);