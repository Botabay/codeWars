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