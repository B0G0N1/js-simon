const play = document.getElementById("play");
const container = document.getElementById('number-container');

// Il gioco parte con l'evento click del bottone 'play'
play.addEventListener("click", function () {
    totalNumber = selectDifficulty();
    let randomNumbers = generateArrayNumbers(totalNumber);
    let positionNumbers = generatePositionNumbers(totalNumber);
    console.log(totalNumber);
    console.log(randomNumbers);
    console.log(positionNumbers);
    randomArrayPrint(randomNumbers, positionNumbers);
});


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
function generateArrayNumbers(numbers) {
    let array = [];
    let i = 0
    while (i < numbers) {
        let number = Math.floor(Math.random() * 100) + 1;
        if (!array.includes(number)) {
            array.push(number);
            i++;
        }
    }
    return array;
}


// Funzione per generare ...
function generatePositionNumbers(numbers) {
    let array = [];
    let i = 0
    while (i < numbers) {
        let number = Math.floor(Math.random() * 1000) + 1;
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