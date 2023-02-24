
/*
4.8
let user = { };
let num = Number(user);
console.log(num);

let user = { };
alert(user);


4.6
let userAdmin={
    admin() {
        console.log('I am admin');
    }
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();

let user = {

};

alert(user.address? user.address.street : undefined);

let user = null;
alert(user?.address?.street);
4.5
task 3
function Accumulator(initValue){
    this.value = initValue;
    this.read = function (){
        this.value += +prompt('Enter current value', '');
        
    }
}

let show = new Accumulator(1);
show.read();
console.log(show.value);
show.read();
show.read();
console.log(show.value);
********************
task2
function Calculator(){
    this.a = 0;
    this.b = 0;
    this.read = function (){
        this.a = +prompt('Enter first number ', '');
        this.b = +prompt('Enter second number', '');
    }

    this.sum = function (){
        console.log( this.a + this.b );
    }

    this.mult = function (){
        console.log( this.a * this.b );
    }
}

let user = new Calculator();
user.read();
user.sum();
user.mult();

*********************
function User(name, age){
    this.name = name;
    this.age = age;
}

let sanket = new User('sanket', 24);
console.log(sanket.age);
***********
function User(name, age){
    if(!new.target){
        return new User(name, age);
    }
    this.name = name;
    this.age = age;
}

let user = User('sanket', 24);
console.log(user.name);
*************
function BigUser(){
    this.name = 'John';
    //return; 
    //return { name: 'Godzilla'};
}

alert(new BigUser().name);
**********************
function User(name){
    this.name = name;
    
    this.sayHi = function(){
        console.log('Hi, My name is '+ this.name);
    }
}

let user = new User('sanket');

user.sayHi();

4.4

task 3
let ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

task 2
let user = {
    a: null,
    b: null,
    read() {
        this.a = +prompt('enter first value', '');
        this.b = +prompt('Enter second value', '');
     },

     sum(){
        console.log ( this.a + this.b );
     },

     mul(){
        console.log( this.a * this.b ); 
     }
};


user.read();
user.sum();
user.mul();
******************
let user = {
    name: 'John',
    age: 30
};

user.sayHi = function(){
    alert('Hello');

    OR 

function sayHi(){
    alert('Hello');
}

user.sayHi = sayHi;
user.sayHi();


}

4.2
****************
let user = { name: 'John'};
let admin = user;
admin.name = 'Pete';

console.log( user.name) ;
//alert(user.name);
alert( user == admin );

alert( user === admin );

admin = {};

alert( user == admin );

**************
const employee = {
    name: 'John',
    age: 30,
};
employee = {}; //gives error
*************************
  let user = {  name: 'John',
    age: 30,
    isAdmin: true
};
let clone = {};

for( let key in user ){
    clone[key] = user[key];
}

for( let key in clone ){
    console.log(clone[key]);
}
***********
let user = {  name: 'John',
    age: 30,
    isAdmin: true
};

let clone = Object.assign({}, user);
console.log(clone.name);
**************
let user = {
    name : 'John',
    sizes: {
        height: 182,
        weight: 60
    }
};

console.log(user.sizes.weight);
/////
let user = {
    name : 'John',
    sizes: {
        height: 182,
        weight: 60
    }
};

let clone = Object.assign({},user);
user.sizes.weight = 74;
console.log(clone.sizes.weight);

4.1

task 1
let user = {
    name: 'John',
    surname: 'Smith',
};

alert(user['name']);

user.name = 'Pete';

alert(user['name']);

delete user.name;

alert(user['name']);

task 2
let schedule = {};

alert( isEmpty(schedule) );

schedule['6.15']= 'Get Up';

alert(isEmpty(schedule));

function isEmpty(obj){
    for(let key in obj){
        return 'false';
    }

    return 'true';
}

task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130  
};
alert(showSalarySum(salaries));

function showSalarySum(obj){
    let sum = 0;
    for( let key in obj ){
        sum += obj[key];
    }
    return sum;
}

task 4
let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};


multyplyNumeric(menu);
function multyplyNumeric( obj ){
    for( let key in obj ){
        if((typeof obj[key]) == 'number'){
            obj[key] *= 2;
        }
    
    }
    return 
}

for( let key in menu ){
    alert(menu[key]);
}

1/2
let user =  {
    name: 'John',
    age: 24,
    "likes birds":true
};

let key = "likes birds"; 
let key = prompt("Which data do you want to see", 'name');

alert(user.name);
alert(user.age);
alert(user[key]);

delete user[key];

alert(user[key]);

3
let fruit = prompt('Which fruit to buy?','apple');
let bag = {
    [fruit]: 5,
};
alert(bag[fruit]);

4 
function makeUser(name, age){
    return{
        name: name,
        age: age,
    };
}

let user = makeUser('John', 30);
alert(user.name);

5 using keyword as variable name
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  alert( obj.for);  


  5
  let user = {};

  alert( user.noSuchProperty === undefined ); // true means "no such property"

  6
  let user = { name: "John", age: 30 };

  alert( "age" in user ); // true, user.age exists
  alert( "blabla" in user ); // false, user.blabla doesn't exist

  7
  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }
*/