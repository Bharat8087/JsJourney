//array destruction
let numbers = [10,20,30];
let [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);

// object destruction
let student = {
    name: "Bharat" ,
    mo: 8087807011
};

let {name, mo} = student;
console.log(name);
console.log(mo);

// function parameter destruction

function show({name, mo}){
    console.log(name + " " + mo);
}
show(student);
