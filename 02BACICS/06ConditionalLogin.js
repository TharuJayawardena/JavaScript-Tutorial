var email = false;
var facebook = true;
var google = false;

// if(email) {
//     console.log("login success");
// }

// if(facebook) {
//     console.log("lofin fail");
// }
// if(google) {
//     console.log("login fail");
// }
// else{
//     console.log("enter vaild login credintails");
// }

if(email || facebook || google){
    console.log("login success");
}
else{
    console.log("login fails");
}