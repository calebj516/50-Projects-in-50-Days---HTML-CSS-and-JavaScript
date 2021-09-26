const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// Using async/await
// label function with async if it involves the use of promises
async function generateJoke () {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  // use await for any promises you put into a variable
  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// using .then below
// function generateJoke () {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

