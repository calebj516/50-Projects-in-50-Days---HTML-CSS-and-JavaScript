const images = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

console.log(listItems);

listItems.forEach((li, idx) => {

  li.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    li.classList.add('active');
    images[idx].classList.add('show');
  })
  
})

function hideAllContents() {
  images.forEach(image => image.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach(item => item.classList.remove('active'));
}