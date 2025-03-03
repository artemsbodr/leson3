// Завдання 1
let celsius = 25;
let fahrenheit = celsius * 9/5 + 32;
console.log(`Температура в Фаренгейтах: ${fahrenheit}`);

// Завдання 2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин в місяці: ${hoursInMonth}`);
console.log(`Кількість хвилин в місяці: ${minutesInMonth}`);

// Завдання 3
let health = 100;
let energy = 100;
health -= 10;
energy -= 20;
console.log(`Рівень здоров'я: ${health}`);
console.log(`Рівень енергії: ${energy}`);

// Завдання 4
let totalPrice = 100;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);
console.log(`Ціна зі знижкою: ${discountedPrice}`);

// Завдання 5
const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log(`Округлене до меншого: ${roundedDown}`);

// Завдання 6
const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(`Перетворене десяткове число: ${parsedFloat}`);

// Завдання 7
const intString = "123";
let parsedInt = parseInt(intString);
console.log(`Перетворене ціле число: ${parsedInt}`);

// Завдання 8
let number = 16;
let sqrtNumber = Math.sqrt(number);
console.log(`Квадратний корінь: ${sqrtNumber}`);

// Завдання 9
const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log(`Перетворене ціле число: ${convertedInt}`);
console.log(`Перетворене у рядок число: ${convertedString}`);
