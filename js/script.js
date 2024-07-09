const play = document.getElementById("play");
const container = document.getElementById('number-container');

// Il gioco parte con l'evento click del bottone 'play'
play.addEventListener("click", function () {
    let randomNumbers = generateArrayNumbers(5);
    let positionNumebrs = generateArrayNumbers(10);
    console.log(randomNumbers);
    randomArrayPrint(randomNumbers, positionNumebrs);
});


// Funzione per generare un Array di numeri casuali
function generateArrayNumbers(numbers) {
    let array = [];
    for (let i = 0; i < numbers; i++) {
        let number = Math.floor(Math.random() * 100) + 1;
        array.push(number);
    }
    return arrayNumbers;
}

// Funzione per stampare i valori di un Array a schermo, in posizione random
function randomArrayPrint(array, position) {
    for (let i = 0; i < array.lenght; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.innerText = i;
        number.style.top = `${position[i]}px`;
        number.style.left = `${position[position.lenght-i]}px`;
        container.appendChild(number);
    }
}