//Multiply
function multiply(a, b){
  return a * b
}

//Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  if (sperm!='XX' & sperm!='XY') return 'wrong data'
  return (sperm=='XX') ? "Congratulations! You're going to have a daughter." :
    "Congratulations! You're going to have a son."
}

//Localize The Barycenter of a Triangle
function barTriang(p1, p2, p3){
  return [+((p1[0]+p2[0]+p3[0])/3).toFixed(4), +((p1[1]+p2[1]+p3[1])/3).toFixed(4)]
}

//Be Concise IV - Index of an element in an array
function find(array,element){let i=array.indexOf(element);return i<0?"Not found":i;}

//Be Concise I - The Ternary Operator
const describeAge=(age,s="You're a(n) ")=>(age <= 12)?s+"kid":(age>=13&&age<=17)?s+"teenager":(age>=18&&age<=64)?s+"adult":s+"elderly"

//Power
function numberToPower(number, power){
  console.info(Math.log2(1024));
  // Code here
  if (power==0) return 1;
  let multy=1;
  for(let i=0; i<power; i++){
    multy*=number;
  }
  return multy;
}

//Find out whether the shape is a cube
var cubeChecker = function(volume, side){
  if ( volume <=0 ) return false;
  return volume==side*side*side ? true : false;
};

//Counting sheep...
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter((el)=>el==true).length
}

//All Star Code Challenge #18
function strCount(str, letter){  
  return str.split('').filter((el)=>el===letter).length;
}

//Unexpected parsing
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return   {
    status: msg
  }
}

//Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  // TODO: Program Me
  return a === b ? false : true;
}

//Function 1 - hello world
// Write a function "greet" that returns "hello world!"
function greet(){
  return "hello world!"
}

//ASCII Total
function uniTotal (string) {
// total up dem unicodes!
  return string.split('').reduce((acc,curV)=>acc+curV.charCodeAt(0),0)
}

//Square(n) Sum
function squareSum(numbers){
  return numbers.reduce((acc,curV)=>acc+curV*curV,0)
}

//Century From Year
function century(year) {
  // Finish this :)  
  return Math.ceil(year/100)
}

//Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (n%x!=0) return false;
  return n%y==0 || false;
}

//Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)); // your code here
}

//Even or Odd
function evenOrOdd(number) {
  return number % 2==0 ? 'Even' : 'Odd';
}

//Return to Sanity
function mystery() {
  var results =
    {sanity: 'Hello'};
  return    results;
}

//Find Nearest square number
function nearestSq(n){
  // your code
let a=Math.floor(Math.sqrt(n));
if (a*a==n) return n;
return (n-a*a)>((a+1)*(a+1)-n) ? (a+1)*(a+1) : a*a;
}

//Grasshopper - Terminal Game #1
function Hero (name='Hero') {
  // add default values here
  return {
    name,
    position:'00',
    health:100,
    damage:5,
    experience:0
  }
}

//Fun with ES6 Classes #1 - People, people, people
class Person {
  // Get coding in ES6 :D
  constructor(firstName='John',lastName='Doe',age=0,gender='Male'){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender;
  }
  
  sayFullName () {
    return this.firstName+' '+this.lastName;
  }
  
  static greetExtraTerrestrials (raceName) {
    return "Welcome to Planet Earth"+' '+raceName;
  }
}

//Reversed Strings
function solution(str){
  return str.split('').reverse().join('');
}

//Add Length
function addLength(str) {
//start-here
  return str.split(' ').map(el=>el=el+' '+el.length);
}

//Convert a Boolean to a String
function booleanToString(b){
  //your code here
  return ''+b;
}

//Price of Mangoes
function mango(quantity, price){
  return Math.floor(quantity/3)*2*price+quantity%3*price;
}

//Unfinished Loop - Bug Fixing #1
function createArray(number){
  var newArray = [];  
  for(var counter = 1; counter <= number;counter++){
    newArray.push(counter);
  }  
  return newArray;
}

//Quarter of the year
const quarterOf = (month) => {
  // Your code here
  return month%3==0 ? month/3 : Math.ceil(month/3)
}

//The 'if' function
function _if(bool, func1, func2) {
  if (bool) func1(); else func2();
}

//Third Angle of a Triangle
function otherAngle(a, b) {
  return 180-a-b;
}

//Simple multiplication
function simpleMultiplication(number) {
  return number % 2 == 0 ? 8 * number : 9 * number;
}

//reversed words
function reverseWords(str){
  return str.split(' ').reverse().join(' '); // reverse those words
}

//Keep Hydrated!
function litres(time) {
  return Math.floor(time*0.5);
}

//Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];  
  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((el)=>!geese.includes(el))
};

//Beginner Series #2 Clock
function past(h, m, s){
  //#Happy Coding! ^_^
  return ((h * 60 + m) * 60 + s) * 1000;
}

//Invert values
function invert(array) {
  return array.map((el) => - el);
}

//String repeat
function repeatStr (n, s) {
  let sum='';
  for(let i = 0; i < n; i++){
    sum += s;
  }
  return sum;
}

//How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name==='Zach' ? 18 : 0;
}

//Powers of 2
function powersOfTwo(n){
  let arr = [];
  for (let i = 0; i <= n; i++){
    arr.push(Math.pow(2,i));
  }
  return arr;
}

//Beginner - Reduce but Grow
function grow(x){
  return x.reduce((acc,curV)=>curV*acc)
}

//Vowel remover
function shortcut (string) {
  let arr=['a', 'e','i', 'o', 'u'], result=[];
  string.split('').forEach((el)=>{
    if (!arr.includes(el)) result.push(el)
  })
  return result.join('');
}

//Collatz Conjecture (3n+1)
var hotpo = function(n){
    if(n == 0 || n == 1) return 0; //Optional Handler to n = 0
    let q = 0;
    while(n > 1){
      q++;
      if(n % 2 == 0) n = n / 2; else n = 3 * n + 1;
    }
    return q;
}

//Subtract the Sum
function SubtractSum(n){
  function calc(n){
    let  s = n + '';
    let val =s.split('').reduce((acc,curV) =>acc + +curV, 0);
    return val;
  }
  while(n >= 10 && n < 10000){
    n = n - calc(n);
  }
  return 'apple';// fruit name like "apple"
  
}

//Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  function calc(n){
    let countCat, countDog;
    for (let i = 1; i <= n; i++){
      if(i == 1) {countCat = 15; countDog = 15;}
      if(i == 2) {countCat += 9; countDog += 9;}
      if (i>2) {countCat +=4; countDog += 5;}
    }
    return [humanYears, countCat, countDog];
  }
  return calc(humanYears);
}

//Grasshopper - Summation
var summation = function (num) {
  // Code here
  let sum=0;
  for (let i = 0; i<=num; i++){
    sum+=i;
  }
  return sum;
}

//The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0]==dish[0]&&beast[beast.length-1]==dish[dish.length-1];
}

//Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let result=(dolphin) ? 2:1;
  return pontoonDistance/youSpeed> sharkDistance/sharkSpeed*result ?  "Shark Bait!" : "Alive!";
}

//Training JS #10: loop statement --for
function pickIt(arr){
  let odd=[],even=[];
  for(let i=0; i<arr.length;i++){
    if(arr[i]%2==0) even.push(arr[i]);
    else odd.push(arr[i])
  }
  return [odd,even];
}

//Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj){
  let arr=[];
  for(let key in obj){
    if(key.length==5) arr.push(key);
    if(obj[key].length==5) arr.push(obj[key]);
  }
  return arr;
}

//Area or Perimeter
const areaOrPerimeter = function(l , w) {
  return l==w ? l*l:(l+w)*2;
};

//Total amount of points
function points(games) {
  return games.reduce((a,v)=>{
    let arr=v.split(':');
    if (arr[0]>arr[1]) v=3;
    if (arr[0]<arr[1]) v=0;
    if (arr[0]==arr[1]) v=1;
    return a+v;
  },0)
}

// Sum Numbers
function sum (numbers) {
  "use strict";
//   function isAN(value) {
//     if(value instanceof Number)
//       value = value.valueOf(); // Если это объект числа, то берём значение, которое и будет числом  
//     return  isFinite(value) && value === parseInt(value, 10);
//   }
    return numbers.reduce((a,v)=>{
      if (Number.isNaN(v)) v=0;
      return a+v},0)    
};

//Grasshopper - Debug
function weatherInfo (temp) {
  function convertToCelsius (temperature) {
    return (temperature - 32) * (5/9)
  }
  let c = convertToCelsius(temp);
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

//What's the real floor?
function getRealFloor(n) {
  if (n<=0) return n;
  if(n<13) return n-1;
  return n-2;
}

//Training JS #2: Basic data types--Number
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =v4  , //set number value to a
      b = v2 ; //set number value to b
  return a - b;
}

function equal3(){
  let a =v1  , //set number value to a
      b = v5 ; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4 , //set number value to a
      b = v5 ; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6 , //set number value to a
      b = v3 ; //set number value to b
  return a % b;
}

//Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s*100000/3600);
}

//Enumerable Magic - Does My List Include This?
function include(arr, item){
  return arr.includes(item)
}

//No Loops 2 - You only need one
function check(a,x){
  return a.includes(x)
};

//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a,v)=>a+v, 0)/classPoints.length<yourPoints;
}

//Calculate Price Excluding VAT
//return price without vat
function excludingVatPrice(price){
  if (price===null) return -1;
  return Math.round(price/(1.15)*100)/100;
}

//Beginner - Lost Without a Map
function maps(x){
  return x.map(el=>2*el)
}

//Twice as old
function twiceAsOld(d, s) {
  let k=0;
  if (d==2*s) return 0;
  if (d/s>2) {
    while(d!=2*s){
      s++;d++;k++;
    }
    return k
  }
  else  {
    while(d!=2*s){
      s--;d--;k++;
    }
    return k;
  }
}

//Find the Remainder
function remainder(n, m){
  let a,b;
  if (n<m) {a=n;b=m;} else {a=m;b=n;}
  return a===0 ? NaN :  b%a;
}

//Classy Extentions
class Cat extends Animal {
  
  constructor(v){
    super();
    this.v=v;
  }
  speak(v){
     return this.v+ ' meows.';
    }
}

//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  let arr=['green','yellow','red'];
  //your code here!
  let index=arr.indexOf(current);
  index=index<2?arr.indexOf(current)+1:0;
  return arr[index]
}

//Return Negative
function makeNegative(num) {
  return num<0?num:-num;
}

//Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice*discount/100));
}

//Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length* width* height
  }
}

//Will there be enough space?
function enough(cap, on, wait) {
  return cap-on>=wait ? 0: wait-(cap-on);
}

//Calculate average
function findAverage(array) {
 // if (array.isEmpty()) return 0;
  return array.reduce((acc,v)=>acc+v,0)/array.length || 0;
}

//Area of a Square
function squareArea(A){
  return r=(2*A/Math.PI)*(2*A/Math.PI)
}

//Return the day
function whatday(num) { 
  let days={1 : "Sunday",
2 : "Monday",
3 : "Tuesday",
4 : "Wednesday",
5 : "Thursday",
6 : "Friday",
7 : "Saturday"}
return days[num]||"Wrong, please enter a number between 1 and 7";
}

//pick a set of first elements
function first(arr, n) {
  if (n===undefined) return [arr[0]];
  return arr.splice(0,n);
}

//MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}

//OOP: Object Oriented Piracy
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt=function(){
   return this.draft-this.crew*1.5>20;
   }
}

//Count Odd Numbers below n
function oddCount(n){
  return Math.floor(n/2);
}