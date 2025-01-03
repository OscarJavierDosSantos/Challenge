const DOG_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const pointsPosition = document.querySelector('#points');

let correctBreed;
let imageUrl;
let pointsCorrect = 0;
let pointsIncorrect = 0;

const buttons = document.querySelectorAll('#options div button');

async function getDogBreeds() {
    const response = await fetch(DOG_BREEDS_URL);
    const data = await response.json();
    return Object.keys(data.message);
}

async function getRandomDogImage(breed) {
    const DOG_IMAGE_URL = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(DOG_IMAGE_URL);
    const data = await response.json();
    const img = data.message[Math.floor(Math.random() * data.message.length)];
    return img;
}

function randomOrder(options) {
    let result = [];

    while (options.length > 0) {
        const randomIndex = Math.floor(Math.random() * options.length);
        result.push(options.splice(randomIndex, 1)[0]);       
    }
    return result;  
}

function isCorrect(buttonSelected) {
    if (buttonSelected.textContent === correctBreed) {
        pointsCorrect += 1;
        buttonSelected.classList.add('correct');
    } else {
        pointsIncorrect +=1;
        buttonSelected.classList.add('incorrect');
        buttons.forEach(button => {
            if (button.textContent === correctBreed) {
                button.classList.add('correct');
            }
        });
    }
    scores(pointsCorrect, pointsIncorrect);
}

function scores(pointsCorrect=0, pointsIncorrect=0) {
    let template = `
    <p>Correctos: ${pointsCorrect} </p>
    <p>Incorrectos: ${pointsIncorrect}</p>`;

    pointsPosition.innerHTML = template;
}
function handlerClick(event) {
    const selectedBreed = event.target;
    isCorrect(selectedBreed);
    buttons.forEach(button => {
        button.removeEventListener('click', handlerClick);
    });

    setTimeout(() => {newGame();}, 2000);
   
}

async function newGame() {
    const breeds = await getDogBreeds();
    correctBreed = breeds[Math.floor(Math.random() * breeds.length)];
    imageUrl = await getRandomDogImage(correctBreed);
    createQuiz(breeds);
}

async function createQuiz(breeds) {
    const options = [correctBreed];
    while (options.length < 4) {
        const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
        if (!options.includes(randomBreed)) {
            options.push(randomBreed);
        }
    }

    const shuffledOptions = randomOrder(options);
    document.getElementById('dog-image').src = imageUrl;

    shuffledOptions.forEach((breed, index) => {
        buttons[index].textContent = breed;
        buttons[index].classList.remove('correct', 'incorrect');
        buttons[index].addEventListener('click', handlerClick);
    });
}

newGame();