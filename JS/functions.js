/* //Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
 //1 – если первое больше, чем второе; и 0 – если числа равны
 let a = prompt("Введите число 1");
let b = prompt("Введите число 2");
function comp (a, b) {
    return a - b;
}
let result = comp(a,b);
if (result>0) {
    console.log("1");
} 
if (result<0) {
    console.log("-1");
} 
if (result==0) {
    console.log("0");
} 

//Написать функцию, которая вычисляет факториал переданного ей числа

let n = prompt("введите число");

function factorial (n) {
    let fact=i=1;
    while (i<=n) {
        fact=fact*i;
        i++;
    
    }
console.log(fact);
}
factorial(n);

//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149

let num_1 = prompt("введите число 1");
let num_2 = prompt("введите число 2");
let num_3 = prompt("введите число 3");

function create_num_123 (num_1,num_2,num_3) {
    let num_123=Number((`${num_1}${num_2}${num_3}`));
    console.log(num_123);
}
create_num_123(num_1,num_2,num_3);*/

//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//Если в функцию передали 1 параметр, то она вычисляет площадь квадрата

let side_1 = parseInt(prompt("введите длину первой стороны прямоугольника"));
let side_2 = parseInt(prompt("введите длину второй стороны прямоугольника"));

function calc_S(side_1, side_2 = side_1) {
  console.log(side_1 * side_2);
}
calc_S(side_1, side_2); //????????????????????????????????????????
calc_S(side_1);
