// the longer the password, the less blury the image

const password = document.getElementById('password');
const background = document.getElementById('background');
// pixels is assigned the number of pixels used in the blur function on background element (see style.css)
// I used this article for assistance: https://zellwk.com/blog/css-values-in-js/
const pixels = getComputedStyle(background).filter.substring(5, 7);

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  // minimum length of 8 is required, along with one special character, one number, and one uppercase character
  const blurValue = pixels - ((length < 8 ? 0 : pixels / 4) + hasSpecialChar(input) + hasNumber(input) + hasUpperCase(input));
  background.style.filter = `blur(${blurValue}px)`;
});

// Has special character !@#$%^&*()
function hasSpecialChar(input) {

  let blurValue = 0;

  if(input.match(/[!@#$%^&*()]/g)){
    // blur value: 1/4 of pixels
    blurValue = pixels / 4;
  }

  return blurValue;
}



// Has number
function hasNumber(input) {

  let blurValue = 0;

  if(input.match(/\d/g)){
    // blur value: 1/4 of pixels
    blurValue = pixels / 4;
  }

  return blurValue;
}



// Has uppercase letter
function hasUpperCase(input) {

  let blurValue = 0;

  if(input.match(/[A-Z]/g)){
    // blur value: 1/4 of pixels
    blurValue = pixels / 4;
  }

  return blurValue;
}

