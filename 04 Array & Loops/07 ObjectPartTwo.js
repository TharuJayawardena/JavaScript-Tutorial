var user = {
    firstName: "Tharushi",//key,value
    lastName: "Jayawardena",
    Age: 23,
    courseList: [],
    byCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `$(this.firstName) is enrolled in total of ${this.courseList.length} courses`;
    },

};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.byCourse("React");
user.byCourse("Node");
console.log(user.getCourseCount());
