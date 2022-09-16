var User = {
    name: "",
    getUserName: function (){
        console.log(`User name is: ${this.name}`);
    },
};

var Tharushi = Object.create(User);
console.log(Tharushi);
Tharushi.name = "Tharushi Jayawardena";
Tharushi.getUserName();


var sam = Object.create(User, {
    name: { value: "sammy"},
    courseCount: { value: 3},
});

sam.getUserName();