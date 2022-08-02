"use strict";

// Task 1

let user = {
    name: "Sevil",
    age: 31
};

console.log(user.name);
delete user.name;
delete user.age;
console.log(user.name);

// Task 2 

let dog = {
    name: "Shelby",
    color: 'chocolate',
};

if(Object.keys(dog).includes('color')) {
    console.log(true)
} else {
    console.log(false)
}

// Task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for(const key in student) {
    console.log(`key: ${key}`);
    console.log(`value: ${student[key]}`);
}

// Task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

// Task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

let averageSalary = (salaries.alexandra + salaries.sveta + salaries.anton + salaries.andrey)/4;
console.log(averageSalary);

// Task 6

let registrationInfo = {
    login: '',
    password: ''
}

registrationInfo.login = prompt("Логин", '');
registrationInfo.password = prompt("Пароль?", '');

console.log(registrationInfo);

function validate() {
    let validationLogin = prompt("Логин", '');
    let validationPassword = prompt("Пароль?", '');

    if(validationLogin == registrationInfo.login 
        && validationPassword == registrationInfo.password) {
        alert('Добро пожалоВать');
    }
}

validate();
