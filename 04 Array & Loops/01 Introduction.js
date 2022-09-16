var countries = ["SriLanka","canada","NewZealand"];

var states = new Array("galle","Matara","Colombo");
console.log(states[0]);

console.log(states.length);

//replace value
states[0] = "Piliyandala";
console.log(states);

var user = ["Tharushi","tharu@gmail.com",3,23,true];
console.log(user);

user.pop();
console.log(user);
user.unshift("New Value");
console.log(user);


user.shift();
console.log(user);

//find index of array
console.log(user.indexOf(3));


//convert string to element

console.log(Array.from("Tharushi"));