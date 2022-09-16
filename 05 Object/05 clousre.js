// function init(){

//     var firstName = "Tharushi";

//     console.log("I am init");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     sayFirstName();
// }

// var value = init();
// value();

function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add = doAddition(4);
console.log(add(5));



console.log(doAddition(5)(5));//10