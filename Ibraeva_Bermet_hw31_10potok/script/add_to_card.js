// let ttl = document.getElementsByClassName("ttl"); 

// console.log(ttl[0].innerText);

// let price = document.getElementsByClassName("price"); 

// console.log(price[0].innerText);

// let image = document.getElementsByClassName("image"); 

// console.log(image[0].src);

//29 urok

// let ttl = document.querySelectorAll(".body_product > .ttl");

// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);
 

// var elements = document.getElementsByClassName("add_card");

//     var myFunction = function () {
//         var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//         console.log(attribute[0].innerText);
//     }

//     for (var i = 0; i < elements.length; i++) {
//         elements[i].addEventListener("click", myFunction, false);
//     }

//     var pricefunc = function () {
//         var attribute2 = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
//         console.log(attribute2[0].innerText);
//     }

//     for (var i = 0; i < elements.length; i++) {
//         elements[i].addEventListener("click", pricefunc, false);
//     }

    // var imagefunc = function () {
    //     var attribute3 = this.parentNode.parentNode.parentNode.querySelectorAll(".image");
    //     console.log(attribute3[0]);
    // }

    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener("click", imagefunc, false);
    // }

// 30 urok

// function test_fun() {
//     alert("hello");
// }

// test_fun();




// function test_fun(param,param2,param3) {
//     var number = 10;
//     var res;
//     res = number + param+ param2 + param3;

//     alert(res)

// }

// test_fun(20,1,3);



// const arr = {
//     name: "Ismar",
//     age: 26,
//     param:{
//         color: "white",
//         nat: "dungan"
//     }
// };

// console.log(arr.name);

// // delete arr.name;

// console.log(arr);


// for (let key in arr) {

//     if (typeof(arr[key])  === 'object'){

//         for (let key2 in arr[key]) {
//             console.log(arr[key][key2]);
//         }

//     } else {

//         console.log(arr[key]);
//     } 
    
// }

// urok 31
// Что такое function

// function name_fun(number)  {
//     let num = number;

//     console.log(num);
// }

// name_fun(200);
// name_fun(300);

// let per = 10;
// console.log(per);

// function name_fun(){
//     let num = 10;

//     console.log(num);
// }

// name_fun();

// let num = 200;


//     function name_fun(num){
//         let per_const = 120;
//         let result;

//         result = per_const + num;
//         console.log(result);
//     }

// name_fun(200);

// HW 31

//Задание №1

// function number() {
//     let number1 = Number(prompt("Введите первое число:" , ));
//     let number2 = Number(prompt("Введите второе число:" , ));
//     let result = number1 ** number2;

//     alert(result);

// }

// number();

// Задание №2

// function calcCircum(radius) {

//     result = 2 * Math.PI * radius;

//     alert(result);
// }

// calcCircum(prompt("Введите радиус: ", ))



//Задание №3

function calcBox() {
    let a = Number(prompt("Введите первое число:" , ));
    let b = Number(prompt("Введите второе число:" , ));
    let result = 2 * (a + b);

    alert(result);
}

calcBox();