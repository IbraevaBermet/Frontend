"use strict";
//использоваие строго режима для обработки данных

// 23 urok

// let age = 29;
// let year = 1993;
// let name = "Bermet"  
  
// console.log(age);
// console.log(year);
// console.log(name);


//24 urok


// let person = {
//     name: "Bermet",
//     family_name: "Ibraeva",
//     age: 29,
//     year_of_born: 1993,
//     location: "Kyrgyzstan"

// };

// console.log("Name: " + person.name +","+ " Family name: " + person.family_name + "," +
//  " Age: " + person.age  + ","+ " Year of born: " + person.year_of_born +","+ 
//  " Location:" + person.location);

// let school = ["maths","physics","chemistry","geography"];

// console.log(school[0],school[1],school[2],school[3]);

//25 urok

//Задание 1

// let name = prompt("Введите ваше имя: ", );
// let surname = prompt("Введите ваше фамилие: ", );

// console.log(name,surname);

//Задание 2

// let number1 = Number(prompt("Введите первую цифру: ", ));
// let number2 = Number(prompt("Введите вторую цифру: ", ));
// let summa = number1 + number2;

// alert(summa);


//Задание 3

// let number1 = Number(prompt("Введите первую цифру: ", ));
// let number2 = Number(prompt("Введите вторую цифру: ", ));
// let summa = number1 * number2;

// alert(summa);



//26 urok

//Задание 1

// let number1 = Number(prompt("Введите первую цифру: ", ));
// let number2 = Number(prompt("Введите вторую цифру: ", ));
// let operator = prompt("Что сделать: +, -, *, /, **, % ");
// let result1 = number1 + number2;
// let result2 = number1 - number2;
// let result3 = number1 * number2;
// let result4 = number1 / number2;
// let result5 = number1 ** number2;
// let result6 = number1 % number2;

// if (operator == "+") {
//     alert("Результат: " + number1 + "+" + number2 + "=" + result1);
// }
// else if (operator == "-") {
//     alert("Результат: " + number1 + "-" + number2 + "=" + result2);
// }
// else if (operator == "*") {
//     alert("Результат: " + number1 + "*" + number2 + "=" + result3);
// }
// else if (operator == "/") {
//     alert("Результат: " + number1 + "/" + number2 + "=" + result4);
// }
// else if (operator == "**") {
//     alert("Результат: " + number1 + "**" + number2 + "=" + result5);
// }
// else if (operator == "%") {
//     alert("Результат: " + number1 + "%" + number2 + "=" + result6);
// }
// else {
//     alert("Вы ввели неправильные данные!")
// }

//Задание 2

let login = "Bermet";
let password = 1993;

let login1 = prompt("Введите ваш логин: ");
let password2;

if (login1 == login) {
    password2 = prompt("Введите ваш пароль: ");
} else {
    alert("Вы ввели неправильный логин!")
    }  if (password2 == password) {
        alert("Welcome!");
    }  else {
        alert("Вы ввели неправильный пароль!");
}






