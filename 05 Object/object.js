var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};


User.prototype.getFirstname = function () {
    console.log(`your firstname is : ${this.firstname}`);
};

var Tharushi = new User ("Tharushi" , 2)
Tharushi.getCourseCount();

if(Tharushi.hasOwnProperety("firstname")){
    hitesh.getFirstname();
}

console.log(Tharushi);
Tharushi.getCourseCount();

var sam = new User("sam",1);
console.log(sam);