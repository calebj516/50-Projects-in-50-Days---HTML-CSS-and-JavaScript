const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('') // turns innerText into an array
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // turns array into elements consisting of each individual letter
    .join('') // turns array back into a string
});