const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5 * 4);

  boxes.forEach(box => {
    /* getBoundingClientRect method returns a DOMRect object providing information bout the size of an element and its position relative to the viewport (MDN) */
    const boxTop = box.getBoundingClientRect().top;
    /* As soon as the top of the next box is less than the trigger point, show it on the screen (add the show class) */
    if(boxTop < triggerBottom){
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}