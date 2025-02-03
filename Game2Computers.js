/*Создайте программу, где два компьютера играют друг с другом в угадывание числа:

Первый компьютер загадывает случайное число от 1 до 100.

Второй компьютер пытается угадать число.

Для угадывания второй компьютер использует стратегию бинарного поиска: он начинает с середины возможного диапазона и уточняет диапазон в зависимости от подсказок 
"Больше"
 или 
"Меньше"
Программа должна выводить шаги игры: попытки, диапазоны и результат.
*/    
function isCorrectNumber(correctNumber) {
    let lowBorder = 1;
    let highBorder = 100;
    while (lowBorder <= highBorder) {
        let currentNumber = Math.floor((lowBorder + highBorder) / 2);

        console.log(`Компьютер 2: Пробую ${currentNumber}.`);
        if (currentNumber == correctNumber) {
            console.log("Компьютер 1: Угадал!");
            return;
        } else if (correctNumber > currentNumber) {
            console.log("Компьютер 1: Больше.");
            lowBorder = currentNumber + 1;

        } else {
            console.log("Компьютер 1: Меньше.");
            highBorder = currentNumber - 1;
        }
    }

}


function randomNumber() {
    return Math.floor(Math.random() * 100);
}

let correctNumber = randomNumber();
console.log(`Компьютер 1: "Загадаю число ${correctNumber}"`);
isCorrectNumber(correctNumber);


