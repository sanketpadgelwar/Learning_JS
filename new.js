

/*
2.11

let userName = prompt('Enter username','');
if(userName === 'Admin'){
    let userPass = prompt('Enter Password','');
        if(userPass === '' || userPass === null){
            alert('Cancelled');
        }else if(userPass === 'TheMaster'){
            alert('Welcome');
        }
        else{
            alert('I dont know you');
        }
}
else if(userName === '' || userName === null){
    alert('Canceled');
}else{
    alert('I dont know you');
}


First and Third will show
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
let age = prompt('Enter age','');
if(!(!age >= 14 && age <=90)){
    alert('correct');
}
if(age >= 14 && age <= 90){
    alert("Correct");
}
alert(null || 2 && 3 || 4);
 The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
Now the result is the first truthy value: 3. 
alert(alert(1) && alert(2));    //first 1 then undefined because alert messages return undefined value
alert(1 && null&& 2);   //null
alert(alert(1)||2||alert(3));   //first 1 then 2
alert(null||2||undefined);  //2

2.10

let login = prompt('Specify the user ','');
let message = (login == 'Employee')? 'Hello':
    (login== 'Director')? 'Greetings':
    (login == '')? 'No login':
    '';
alert(message);
let a=2,b=1;
let result = ((a+b)<4)? 'Below':'Over';
alert(result);
let userInput = prompt("Enter a number ",'');
if(userInput > 0){
    alert(1);
}else if(userInput < 0){
    alert(-1);
}else{
    alert(0);
}
let answer = prompt('What is the "official" name of JavaScript?','');
let output = (answer == 'ECMAScript')? 'Right' : 'You dont know? ECMAScript';
alert(output);
if('0'){
    alert('hello');
}

2.9
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false

2.8
let a = prompt('first number?',1);
let b = prompt('second number',2);
alert(+a + +b);

let a = +prompt('first number?',1);
let b = +prompt('second number',2);
alert(a + b);
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
let a =2;
let x=1 +(a*= 2);
alert(`${a} ${x}`);
let a=1
,b=1;
let c =++a;
let d = b++;
alert(`${c} ${d}`);
alert(2+1+'3');

2.7
Boolean Conversion
alert(Boolean(1));
alert(Boolean(0));   
alert(Boolean(""));
alert(Boolean('hello'));

 Number conversion
alert(Number('123'));
alert(Number('123z'));
alert(Number(true));
alert(Number(false));

let age = Number('write down your own something');
alert(age);

alert('6'/'2');
let str="123";
alert(typeof str);
let num = Number(str);
alert(typeof num);


String conversion
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

 2.6
let yourName = prompt('What is your name?',);
alert(yourName);

let isGraduate = confirm("Are you Post- Graduate Student??");
alert(isGraduate);

let userInput = prompt('js or java', 'Dont know');
alert(`Sanket Says ${userInput}`);

alert('hello);

2..5
let myPlanet;
let currentUser;
alert(Infinity);

let admin,name;
name= 'John';
admin=name;
alert(admin);

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

console.log('hello'.toUpperCase());
console.log('Hey'.startsWith('H'));
console.log('    remove whitespace    '.trim());

console.log('Hello'+'World');
console.log('Hello'+' '+'World');
console.log('Teaching the world how to code'.length);

console.log(3.5+25);
console.log(2023-1969);
console.log(65/240);
console.log(0.2708 * 100);*/
