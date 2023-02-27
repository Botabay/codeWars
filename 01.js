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