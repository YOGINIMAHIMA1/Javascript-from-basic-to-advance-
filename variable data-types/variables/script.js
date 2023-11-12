// ways to declare a variab;le
// var , let , const
let firstName='Mahima';
let lastName='Bhardwaj';
console.log(firstName, lastName); //Mahima Bhardwaj
let age='18';
console.log(age);//18
// Rules to declare a variable
//Naming Conventions
//only numbers, letters, underscores and dollar sign
// can't start with a number
//Multi-Word Formatting
//firstName-cameCase
//FirstCase-PascalCase
//firstname-lowercase
//first_Name-underscore

//Re-assigning Variable
let age=18;
age=18;
console.log(age);//21

let score;
score=1;
console.log(score)//1

if(true)
{
  score=score+1;
}
console.log(score);
const x=10;
x=20;// show error:
assignment to const data type
 const arr[1,2,3,4];  
arr=[1,2,3,4,5];
console.log(arr)//error -assignment to const variable

const arr=[1,2,3,4];
arr.push(5);
console.log(arr);// (5) [1,2,3,4,5]

const person=
  {
    name:'Mahima';
  }
  person.name='rose';
  person.email='xyz@gmail.con';
console.log(person); //{ name:'Mahima',email:'xyz@gmail.com'} >prototype:object



//Declare Multiple value at once
let a,b,c;
const d=20;
e=30;
f=40;
console.log(d);//10
console.log(a);//undefined

//array declararion
const arr=[1,2,3,4];
arr=[1,2,3,4,5];
console.log(arr);//error- assignmnet to const datatype
const arr=[1,2,3,4];
arr.push(5);
consolelog(arr);//arr=[1,2,3,4,5];
const person=
  {
    name='Mahima';
}
person.name='kylie';
person.email='xyz@gmail.com';
console.log(person);
// {name:'Mahima',email:'xyz@gmail.com'}


