const play = document.getElementById("play");

// Il gioco parte con l'evento click del bottone 'play'
play.addEventListener("click", function () {
    let randomNumbers = generateArrayNumbers(5);
    console.log(randomNumbers);
});


// Funzione per generare un Array di numeri casuali
function generateArrayNumbers(numbers) {
    let arrayNumbers = [];
    for (let i = 0; i < numbers; i++) {
        let number = Math.floor(Math.random() * 100) + 1;
        arrayNumbers.push(number);
    }
    return arrayNumbers;
}

// Funzione per stampare i valori dentro un Array a schermo