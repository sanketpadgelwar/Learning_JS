let student = { 
    name: 'John',
    age: 30,
    isAdmin: true
};

let json = JSON.stringify(student);
alert(typeof json);
alert(json);






















/*
5.11
task3

task2
let date = new Date(2012, 0, 4);
alert(getWeekDay(date));

function getWeekDay(date){
    let days = ['MO','TU','WE','TH','FR','SA'];
    return days[date.getDay()];
}


task1
let d1 = new Date("2012-02-20T03:12");
alert(d1);

let d2 = new Date(2012, 1, 20, 3, 12);
alert( d2 );

*********************************
let today = new Date(0);
alert(today);
today.setHours(0,0,0,0);
alert(today);

5.10 
task2
let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
};

function topSalary(salaries){
    let maxSal = 0;
    let maxName = null;
    for(let [name, sal] of Object.entries(salaries)){
        if(maxSal < sal){
            maxSal = sal;
            maxName = name;
        }
    }
    return maxName;
}


console.log(topSalary(salaries));

task1
let user = {
    name: 'John',
    years: 30
};

({ name, years: age, isAdmin = false} = user);
alert(name);
alert(age);
alert(isAdmin);


*************************************
let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ['Cake', 'Donut'],
    extra: true
};
({size: {
    width, height
},
items: [item1, item2],
title = 'Menu'} = options);
console.log(width);
console.log(item1);

let options = {
    title: 'Sanam teri kasam',
    weight: 49,
    height: 20
};
let {weight: w,title: t, height} = options;
console.log(w);

let options = {
    title: 'Sanam teri kasam',
    weight: 45,
    height: 20
};
let {weight, title,  height} = options;
console.log(title);

let [name = prompt('Name?'), surname = prompt('Surname?')] = ['Julius'];
console.log(name);
console.log(surname);

let [name1, name2, ...rest] = ['hi', 'this', 'is', 'sanket'];
alert(rest[0]);

let arr = ['John', 'Cubowsky'];
let [firstname, lastname] = 'Jogn Cubowsky'.split(' ');
console.log(firstname +' '+ lastname);


5.9
task2
function count(obj){
    return Object.keys(obj).length;
}


let user = {
    name: 'John',
    age: 30
  };
  
  alert( count(user) ); // 2
task1
function sumSalaries(salaries){
    let sumSal=0;
    for(let salary of Object.values(salaries)){
            sumSal+=salary;
    }

    // return Object.values(salaries).reduce((a,b)=> a + b, 0)
    return sumSal;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650

*********************************
let prices = {
    banana: 1,
    organge: 2,
    meat: 4
};

 let doublePrices = Object.fromEntries(
    Object.entries(prices)
    .map( entry => [entry[0], entry[1] * 2])
 );
 console.log(doublePrices);

let user = {
    name: 'Sanket',
    age: 24
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for(let val of Object.values(user)){
    console.log(val);
}

5.8
task2
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
  readMap.set(messages[0], new Date(2017, 1, 1));
  // Date object we'll study later

  console.log(readMap.get(messages[0]));

task1
let messages = [
    {text: 'Hello', from: 'Rahul'},
    {text: 'Where are you?', from: 'Amit'},
    {text: 'Are you coming to college', from: 'Amol'}
];

let readMessage = new WeakSet();

readMessage.add(messages[0]);
readMessage.add(messages[1]);

console.log('Is message read: '+ readMessage.has(messages[0]));

messages.shift();

console.log(messages);
**********************************
let visitedSet = new WeakSet();

let john = { name: 'John'};
let pete = { name: 'Pete'};
let mary = { name: 'Mary'};

visitedSet.add(john);
visitedSet.add(pete);

console.log(visitedSet.has(john));
console.log(visitedSet.has(mary));
john = null;

console.log(visitedSet.has(john));

************************************
let obj  = {};
let weakMap = new WeakMap();
 weakMap.set(obj, '..');
 console.log(weakMap.get(obj));
  obj = null;
  console.log(weakMap.get(obj));

5.7
task3
let map = new Map();
map.set('name','john');
let keys = Array.from(map.keys());

console.log(keys);
keys.push('more');

console.log(keys);

task2
function aclean(arr){
    let map = new Map();
    for(let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted,word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

task1
function unique(arr){
    return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O


**********************
let set = new Set();

let john = { name: 'John', age: 30};
let mary = { name: 'Mary', age: 45};
let pete = { name: 'Pete', age: 25};

set.add(john);
set.add(mary);
set.add(pete);
set.add(john);

console.log(set.size);

for(let relative of set){
    console.log(relative.name);
}



let map = new Map([
    ['cucumber', 500],
    ['banana', 300],
    ['tomato', 400]
]);

let obj = Object.fromEntries(map);

console.log(obj.tomato);
***********
let obj = {
    name: 'John',
    age: 30
};

let map = new Map(Object.entries(obj));
alert(map.get('name'));
*****************
let recipeMap = new Map([
    ['cucumber',500],
    ['tomato', 300],
    ['onion',200]
]);

for(let veggies of recipeMap.keys()){
    console.log(veggies);
}

for(let quantity of recipeMap.values()){
    console.log(quantity);
}

for(let entries of recipeMap.entries()){
    console.log(entries);
}

******************
let map = new Map();

map.set(1,'num1')
.set('1','str1')
.set(true,'bool1');

alert(map.get(1));
alert(map.get('1'));
alert(map.get(true));

alert(map.size());

5.6
let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

let arraylike = {
    0: "hello",
    1: "world",
    lenght: 2
};

let arr = Array.from(arraylike);
console.log(arr.pop());

let str = "Hello";
let iterator = str[Symbol.iterator]();
while(true){
    let result = iterator.next();
    if(result.done)break;
    console.log(result.value);
}
let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, and then 😂
}

let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function(){

    return{
        current: this.from,
        last: this.to,

        next(){
            if(this.current <= this.last){
                return{ done: false, value: this.current++};
            }else{
                return { done: true};
            }
        }
    };
};

for(let num of range){
    console.log(num);


5.5

task 10
function shuffle(arr){
    arr.sort(()=> Math.random() - 0.5);
    console.log(arr);
}    
let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]

task 9 sort by age
function sortByAge(Arr){
    return arr.sort((a,b)=> a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

task 8 map object
let john = { name: 'John', surname: 'Smith', id: 1};
let pete = { name: 'Pete', surname: 'Hunt', id: 2};
let mary = { name: 'Mary', surname: 'Key', id: 3};

let users = [ john, pete, mary ];
let usersMapped = users.map(user => ({
    fullname: `${user.name} ${user.surname}`,
    id: user.id
}));
alert(usersMapped[0].id);
alert(usersMapped[0].fullname);

task 7 map
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(items => items.name);
alert(names);
task 6
function Calculator(){

    this.methods = {
        '-': (a,b) => a - b,
        '+': (a,b) => a + b
    };

    this.calculate = function(str){
        let split = str.split(' ');
      let a = +split[0];
      let op = split[1];
      let b = +split[2];
        
        if(!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }

        return this.methods[op](a,b);
    };

    this.addMethod = function(name, func){
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

task 5
let arr = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arr);

function copySorted(arr){
    //let copyArr = arr.splice();
    return arr.slice().sort();
}



console.log(sorted);
console.log(arr);

task 4
let arr = [5,2,1,-10,8];
arr.sort((a,b) => b- a);
console.log(arr);

task 3
let arr = [5,3,8,1];
filterRangeInPlace(arr, 1,4);

function filterRangeInPlace(arr,a,b){
    for(let i =0; i<arr.length; i++){
        let val = arr[i];
        if(val < a || val > b){
            arr.splice(i,1);
        }
    }
}
console.log(arr);

task 2
let arr = [5,3,8,1];
let filtered = filterRange(arr, 1, 4);
function filterRange(arr,a,b){
    return arr.filter( item => a <= item && item <= b);
}

console.log(filtered);

task 1
function camelize(str){
    return str
    .split('-')
    .map(
        (word, index) => index == 0? word : word[0].toUpperCase() + word.slice(1)
    ).join('');
}
console.log(camelize('-hi-This-is-me'));

***************************************

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user){
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age:16},
    {age:20},
    {age:23},
    {age:30}
];

let soldiers = users.filter(army.canJoin, army);

for(let soldier of soldiers){
    alert(soldier.age);
}


alert(Array.isArray([]));
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