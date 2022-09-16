const names = ["YouTube","Instergram","Facebook","Netflix","Amezon"]

for(const n of names){
    console.log(n);
}


const symbol = {
    yt: "YouTube",
    ig: "Instrergram",
    fb: "FaceBook",
    lco: "LineOfOnline"

};

for(const n in symbol){
    console.log(`key is: ${n} and value is: ${symbol[n]}`);
}