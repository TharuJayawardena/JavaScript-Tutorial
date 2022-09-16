


var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged In Successfully");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if(cardInfo){
//             console.log("You can make purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make purchase");
}else{
    console.log("You are not allow to do that");
}