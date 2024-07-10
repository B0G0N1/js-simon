// Dichiarazione Elementi
const play = document.getElementById("play");
const container = document.getElementById('number-container');
const height = container.offsetHeight; // Altezza Conteiner dove stamperò i Numeri
const width = container.offsetWidth; // Larghezza Container dove stamperò i Numeri
const range = 20; // Distanza alla quale devono stare i numeri
// SERVE UN IF SE LO SCHERMO è PICCOLO ALTRIMENTI LOOP


// Il gioco parte con l'evento click del bottone 'play'
play.addEventListener("click", function () {
    totalNumber = selectDifficulty();
    let randomNumbers = generateArrayNumbers(totalNumber, 100, 1);
    let positionNumbers = generateArrayNumbers(totalNumber, height, range);
    positionNumbers += generateArrayNumbers(totalNumber, width, range);
    console.log(randomNumbers);
    console.log(positionNumbers);
    console.log(width);
    console.log(height);
    randomArrayPrint(randomNumbers, positionNumbers);
});


// Funzione per inserire quanti numeri da memorizzare
function selectDifficulty() {
    let count;
    do {
        count = prompt("Quanti numeri vuoi provare a memorizzare?");
        count = parseInt(count);
        if (isNaN(count) || count < 1 || count > 10) {
            alert("Inserisci un numero valido tra 1 e 10");
        }
    } while (isNaN(count) || count < 1 || count > 10);
    return count;
}


// Funzione per generare un Array di numeri casuali diversi tra loro
function generateArrayNumbers(value, max, range) {
    let array = [];
    let i = 0
    while (i < value) {
        let number = Math.floor(Math.random() * (Math.floor(max / range) + 1)) * range;
        if (!array.includes(number)) {
            array.push(number);
            i++;
        }
    }
    return array;
}


// Funzione per stampare i valori di un Array a schermo, in posizione random
function randomArrayPrint(array, position) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.innerText = i;
        number.style.top = `${position[i]}px`;
        number.style.left = `${position[position.length - i]}px`;
        container.appendChild(number);
        console.log(number);
    }
}