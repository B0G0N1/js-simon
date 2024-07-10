// Dichiarazione Elementi
const play = document.getElementById("play");
const container = document.getElementById('number-container');


// Variabili per dimensione container e per calcolare la posizione random dei numeri all'interno
const range = 50;
const min = 20;
const height = container.offsetHeight - (range + min);
const width = container.offsetWidth - (range + min);


// Variabili per Countdown
const time = document.getElementById('seconds');
let clock;
let timeout;


// Il gioco parte con l'evento click del bottone 'play'
play.addEventListener("click", function () {
    clearInterval(clock);
    clearTimeout(timeout);
    let totalNumber = selectDifficulty();
    let randomNumbers = generateArrayNumbers(totalNumber, 100, 1, 1);
    const verticalPositionNumbers = generateArrayNumbers(totalNumber, height, min, range);
    const horizontalPositionNumbers = generateArrayNumbers(totalNumber, width, min, range);
    randomArrayPrint(randomNumbers, verticalPositionNumbers, horizontalPositionNumbers);
    startCountdown();
    timeout = setTimeout(() => {
        let userNumbers = insertNumbers(totalNumber);
        checkNumbers(randomNumbers, userNumbers);
    }, 31000);
});


// Funzione per selezionare quanti numeri da memorizzare
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


// Funzione per generare un Array di numeri casuali diversi tra loro, a cui passo un massimo, minimo, quanti valori voglio e un range.
function generateArrayNumbers(value, max, min, range) {
    const array = [];
    while (array.length < value) {
        const number = Math.floor(Math.random() * (Math.floor((max - min) / range) + 1)) * range + min;
        if (!array.includes(number)) {
            array.push(number);
        }
    }
    return array;
}


// Funzione per stampare i valori di un Array a schermo, in posizione random, con la responsività si rompe, ma mi accontento
function randomArrayPrint(randomNumbers, verticalPositionNumbers, horizontalPositionNumbers) {
    container.innerHTML = '';
    for (let i = 0; i < randomNumbers.length; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.innerText = randomNumbers[i];
        number.style.bottom = `${verticalPositionNumbers[i]}px`;
        number.style.left = `${horizontalPositionNumbers[i]}px`;
        numberPadding(number);
        container.appendChild(number);
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
    let seconds = 30;
    time.innerText = `Countdown: ${seconds}`;
    clock = setInterval(function () {
        if (seconds === 1) {
            clearInterval(clock);
            time.innerText = '';
            container.innerHTML = '';
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
    return userNumber;
}


// Funzione per controllare quanti numeri ci siamo ricordati
function checkNumbers(randomNumbers, userNumbers) {
    let correctNumbers = [];
    for (let i = 0; i < userNumbers.length; i++) {
        if (randomNumbers.includes(parseInt(userNumbers[i]))) {
            correctNumbers.push(parseInt(userNumbers[i]));
        }
    }
    alert("Hai indovinato " + correctNumbers.length + " numeri: " + correctNumbers);
}