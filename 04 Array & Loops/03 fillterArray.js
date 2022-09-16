var testArray = [2,4,6,8,10];
console.log(testArray.fill("T"));// The array ful fill with the letter T


var testArray = [2,4,6,8,10];
console.log(testArray.fill("T", 2, 5));

const myNumber = [22,23,24,25,26];
const result = myNumber.filter((num) => num != 25);
console.log(result);//without 25, print other values