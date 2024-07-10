// Dichiarazione Elementi
const play = document.getElementById("play");
const container = document.getElementById('number-container');
const range = 50;
const height = container.offsetHeight - range;
const width = container.offsetWidth- range;
const min = 20;
// SERVE UN IF SE LO SCHERMO è PICCOLO ALTRIMENTI LOOP


// Il gioco parte con l'evento click del bottone 'play'
play.addEventListener("click", function () {
    totalNumber = selectDifficulty();
    let randomNumbers = generateArrayNumbers(totalNumber, 100, 1, 1);
    let positionNumbers = generateArrayNumbers(totalNumber, height, min, range).concat(generateArrayNumbers(totalNumber, width, min, range));
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


// Funzione per generare un Array di numeri casuali diversi tra loro,
// a cui passo un valore massimo, minimo, quanti valori voglio e un range.
function generateArrayNumbers(value, max, min, range) {
    let array = [];
    let i = 0;
    while (i < value) {
        let number = Math.floor(Math.random() * (Math.floor((max - min) / range) + 1)) * range + min;
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
        number.innerText = array[i];
        number.style.bottom = `${position[i]}px`;
        number.style.left = `${position[position.length - (i + 1)]}px`;
        numberPadding(number);
        container.appendChild(number);
        console.log(number);
    }
}

function numberPadding(number) {
    if (number.innerText < 10) {
        number.style.padding = '10px 18px';
    }
    else if (number.innerText == 100) {
        number.style.padding = '18px 10px';
    }
}