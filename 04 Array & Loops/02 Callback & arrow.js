function isEven(element){
    // if(element % 2 === 0){
    //     return true;
    // }
    //     return false;
    

  return element % 2 == 0;

}

console.log(isEven(2));

var result = [2,3,6,8].every(isEven);
console.log(result);//when at least one element isn't correct it show false 

var result = [2,4,6,8].every((e) => (e % 2 == 0))
//remove {});
console.log(result);

var result = [2,4,6,8].every((e) => { return e % 2 == 0;}//with {}
);
console.log(result);