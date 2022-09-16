const myState = [
    "Galle",
    "Tharushi",
    1999,
];
var i = 0;

for (;;) {
    if(i>3) break;
    console.log(i);
    i++;

}
myState.forEach((s) => (console.log(s)));