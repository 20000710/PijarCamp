// function declaration

// function test(a,b){
//     let sum = a + b;
//     return sum
// }

// console.log(test(3,5))


// function expression

// const add = function(a,b){
//     let sum = a+b;
//     return sum
// }

// console.log(add(2,3))


// arrow function

// const add = (a,b) => {
//     let sum = a + b;
//     return sum;
// }
// console.log(add(2,3))

// const person = {
//     name: "Zaki",
//     age: 21,
//     address: {
//         province: "DKI Jakarta",
//         city: "East Jakarta",
//     },
//     hobbies: ["membaca", "menulis","mendengarkan"],
//     details: function () {
//         return `Nama Saya ${name}`;
//     }
// }

// const {name, age, address, hobbies, details} = person

// console.log(details());


// built-in function 

// const urutkan = () => {
//     const arr = [100, 1, 80];

//     // descending
//     // return arr.sort(function(a,b){ return b-a });

//     // ascending
//     return arr.sort()
// }

const  looping = () => {
    const array = ["C", "Z", "A"];
    const alfa = array.map((Item, index) => {
        console.log(`element ${Item} baris ke-${index+1}`);
    })
}

looping()
