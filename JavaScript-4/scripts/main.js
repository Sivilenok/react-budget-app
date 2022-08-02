"use strict";

// Task 1

function getSumTask1(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        //console.log(i);
        sum = sum + i;
    }
    return sum;
 }

 console.log(getSumTask1(100));

 // Task 2

 function calculateCreditSum(credit) {
    let rateYear = 0.17;
    let years = 5;
    return credit * rateYear * years;
 }

 console.log(calculateCreditSum(100));
 
// Task 3

function trimString(str, start, end) {
    return str.slice(start, end);
}

console.log(trimString('Im frontend programmer', 3, 11));

// Task 4

function getSumNumbers(number) {
    let sum = 0;
    let figures = number.toString();

    for (let i = 0; i < figures.length; i++) {
      sum += Number(figures[i]);
    }

    return sum;
}

console.log(getSumNumbers(2021));

// Task 5

function getSum(a, b) {
    let sum = 0;
    let maximum = Math.max(a, b);
    let minimum = Math.min(a, b);
    for (let i = minimum; i <= maximum; i++) {
      sum += i;
    }

    return sum;
}

console.log(getSum(5, -3));
console.log(getSum(1, 1));

// Task 6 

function foo() {
    console.log('foo');
}

function boo() {
    console.log('boo');
}

function fooBoo(isTrue, funcOne, funcTwo) {
  if (isTrue) {
    funcOne();
  } else {
    funcTwo();
  }
}

fooBoo(false, foo, boo);
fooBoo(true, foo, boo);

// ADVANCED Task 2

//for(let i = 0; i < n; i++) {
//    for(j = 0; j < matchMedia; j++) {
        //todo calc
//    }
//}