let randomNumbers = generateArrayNumbers(5);
console.log(randomNumbers);

function generateArrayNumbers(numbers) {
    let arrayNumbers = [];
    for (let i = 0; i < numbers; i++) {
        let number = Math.floor(Math.random() * 100) + 1;
        arrayNumbers.push(number);
    }
    return arrayNumbers;
}