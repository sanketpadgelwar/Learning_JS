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

/*
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