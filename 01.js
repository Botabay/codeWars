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