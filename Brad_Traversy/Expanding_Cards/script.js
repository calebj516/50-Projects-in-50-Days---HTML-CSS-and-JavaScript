// Select all panels
const panels = document.querySelectorAll('.panel');

// for each panel, add an event listener that removes all active classes and then applies the active class to the element that is clicked on.
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
};