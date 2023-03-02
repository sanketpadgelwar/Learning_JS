






/*
5.5

let arr = [1,2,3,4,5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);
console.log(Array.isArray(arr));

let names = 'john, ram, sham';
let arr = names.split(', ');
for( let name of arr){
    console.log(`This is ${name} `);
}

function compareNumeric(a,b){
    if(a > b)return 1;
    if(a == b)return 0;
    if(a < b)return -1;
}

let arr = [25,06,98];
arr.sort(compareNumeric);
console.log(arr);


let lengths = ['hello','hi','bye','see you'].map(item=> item.length);
console.log(lengths);

let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'}
];
let user = users.find(item => item.name == 'Pete');
console.log(`User id : ${user.id} \nUser name : ${user.name}`);
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);


let arr = ['s','a','n','k','e','t']
arr.forEach((item, index, array)=>{
    console.log(`${item} found at ${index} in ${array} `);
});



let arr = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h','i','j'];
console.log( arr.splice(1,2) );
console.log(arr.slice(1,4));
console.log(arr.concat(['s','a','n','k','e','t']));



5.4
task4
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );

task3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // returned array values

task2
let styles = ['Jazz','Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

styles[Math.floor(styles.length/2)] = 'Classic';
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Reggae');
console.log(styles);

styles.unshift('Rap');
console.log(styles);

task1
let fruits = ['Apples','Pear','Oranges'];
let shoppingCart = fruits;
shoppingCart.push('Banana');

alert(fruits.length);

***********************************
let fruit = ['Apple', 'Orange', 'Pear'];
fruit.push('Banana');
console.log(fruit);
console.log(fruit.pop());
console.log(fruit.shift());
fruit.unshift('Mango');
console.log(fruit);

5.3
task1
function ucFirst(str){
    let ucF  = str[0].toUpperCase();
    str = ucF + str.slice(1);
    return str;
}

console.log(ucFirst('hello'));


task2
function checkSpam(str){
    if(!str) return str
    return ( str.includes('subscribe') || str.includes('spam') );
}

console.log(checkSpam('hi thi is a spam mail'));

task3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

  console.log(truncate('Hi everyone! this is sanket',10));

task4
function extractCurrecyValue(str){
    return str.slice(1);
}
console.log(extractCurrecyValue('$120'));

****************************
let str = 'as sly as a fox, as a strong as an ox';
let pos = 0;
let target = 'as';
while(true){
    let foundPos = str.indexOf(target,pos);
    if(foundPos == -1) break;

    alert(`Found at ${foundPos}`);
     pos = foundPos + 1;
}



let str  = 'Widget with id';
alert(str.indexOf('Widget'));
alert(str.indexOf('with'));
alert(str.indexOf('id'));


alert('i\'m dead');
let str = 'Hi';
str = 'h' + str[1];
alert(str);

5.2

task1
let a = +prompt('Enter first number' ,'' );
let b = +prompt('Enter second number','');
console.log(a+b);

task 2
console.log( Math.round(6.35*10)/10 );

task3
function readNumber(){
    let userInput = prompt("Enter a number", '');
    if( isNaN(userInput) ){
        readNumber();
    } else {
        console.log(userInput);
    }
}

readNumber();

task4
let i = 0;
while( i < 10){
    i+=0.2;
    console.log(i);
}

///infinite loop


*******************

console.log( parseInt('a100px') );

console.log( parseInt('100px') );
console.log( parseFloat('12.5em') );
console.log( parseInt('12.5em') );

**********************
console.log(isNaN(NaN));
let str = 5434;
console.log(isNaN(str));
str ='hi';
console.log(isNaN(str));
*******************

let num = 1000;
let n = 1e3;
console.log(num===n);
let num = 1.23456;


5.1

let str = 'Hello';
str.test = 5;
console.log(str.test);
let str = "Sanket says hi";
console.log(str.toUpperCase());

let n = 1.23345;
console.log(n.toFixed(3));

console.log(typeof new Number(0));

let zero = Number('123');
if(zero){
    console.log(typeof zero);
}
**********************
let user = {
    name: 'John',
    age: 30,
    sayHi(){
        console.log(user.name + ' Says hi');
    }
};

user.sayHi();
*/