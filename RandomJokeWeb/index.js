const jokeImage = document.getElementById('joke-image');
const jokeSetup = document.getElementById('joke-setup');
const jokePunchline = document.getElementById('joke-punchline');
const newJokeButton = document.getElementById('new-joke-button');
const url = 'https://official-joke-api.appspot.com/random_joke';

window.addEventListener('load', () => {
    getJoke();

    newJokeButton.addEventListener('click', () => {
        getJoke();
    })
});

function getJoke() {
    axios.get(url)
        .then(response => {
            console.log(response);
            jokeSetup.innerHTML = response.data.setup;
            jokePunchline.innerHTML = response.data.punchline;
        })
};