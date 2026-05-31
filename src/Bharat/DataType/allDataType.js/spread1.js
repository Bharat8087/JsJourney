let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2);


let a = [1,2];
let b = [3,4];
let c = [...a, ...b];
console.log(c);


let x = [2,3,4];
let y = [1,...x,5];
console.log(y);

let student = {
    name:"Bharat",
    mo: 8087807011
};

let newStudent ={
    ...student,
    city: "Pune"
};
console.log(newStudent);

function sum(a,b,c){
    return a+b+c;
}
let numbers = [5,10,15];
console.log(sum(...numbers));
