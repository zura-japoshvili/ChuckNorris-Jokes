const joke_api = 'https://api.chucknorris.io/jokes/random';
const joke = document.querySelector(".joke");
const content = document.querySelector(".content");

async function getJoke() {
    const response = await fetch(joke_api);
    const data = await response.json();
    console.log(data);
    const { value } = data;
    console.log(value);
    joke.textContent = value;


}

getJoke();

function showBG(){
    content.style.backgroundImage = "URL(img/chuckgif.gif)";
    setTimeout(function(){
        content.style.backgroundImage = "none";
    }, 1800);   

}