// Dichiarazione Elementi
const play = document.getElementById("play");
const container = document.getElementById('number-container');

// Costanti per altezza container per calcolare la posizione random dei numeri all'interno
const range = 50;
const min = 20;
const height = container.offsetHeight - (range + min);
const width = container.offsetWidth - (range + min);

// Countdown
let time = document.getElementById('seconds');
let clock;

// Il gioco parte con l'evento click del bottone 'play'
play.addEventListener("click", function () {
    const totalNumber = selectDifficulty();
    const randomNumbers = generateArrayNumbers(totalNumber, 100, 1, 1);
    const verticalPositionNumbers = generateArrayNumbers(totalNumber, height, min, range);
    const horizontalPositionNumbers = generateArrayNumbers(totalNumber, width, min, range);
    console.log(randomNumbers);
    console.log(verticalPositionNumbers);
    console.log(horizontalPositionNumbers);
    console.log(width);
    console.log(height);
    randomArrayPrint(randomNumbers, verticalPositionNumbers, horizontalPositionNumbers);
    startCountdown();
    setTimeout(() => {
        insertNumbers(totalNumber);
    }, 6000);    
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
    const array = [];
    let i = 0;
    while (i < value) {
        const number = Math.floor(Math.random() * (Math.floor((max - min) / range) + 1)) * range + min;
        if (!array.includes(number)) {
            array.push(number);
            i++;
        }
    }
    return array;
}

// Funzione per stampare i valori di un Array a schermo, in posizione random
// Con la responsività si rompe, ma per adesso va bene così
function randomArrayPrint(array, yposition, xposition) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.innerText = array[i];
        number.style.bottom = `${yposition[i]}px`;
        number.style.left = `${xposition[i]}px`;
        numberPadding(number);
        container.appendChild(number);
        console.log(number);
    }
}

// Funzione per sistemare padding/dimensione numeri
function numberPadding(number) {
    if (number.innerText < 10) {
        number.style.padding = '10px 18px';
    } else if (number.innerText == 100) {
        number.style.fontSize = '20px';
        number.style.padding = '15px 10px';
    }
}

// Funzione per far partire un countdown di 30 secondi
function startCountdown() {
    let seconds = 5;
    if (clock) {
        clearInterval(clock);
    }
    time.innerText = `Countdown: ${seconds}`;
    clock = setInterval(function () {
        if (seconds === 0) {
            clearInterval(clock);
            time.innerText = "Tempo scaduto!";
        } else {
            seconds--;
            time.innerText = `Countdown: ${seconds}`;
        }
    }, 1000);
}


// Funzione che chiede in input i numeri che si ricorda l'utente
function insertNumbers(totalNumber) {
    let userNumber = [];
    alert("Inserisci uno alla volta i numeri che ti ricordi, se non ricordi, lascia il campo vuoto");
    for (let i = 0; i < totalNumber; i++) {
        let input = prompt(`Inserisci il numero ${i + 1}: `);
        userNumber.push(input);
    }
    console.log(userNumber);
}