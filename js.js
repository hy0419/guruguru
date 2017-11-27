var n = document.getElementById("a").value;//get

var random = Math.floor(Math.random()*99);

document.getElementById("a").innerHTML=random;



//setInterval(r,150);
//setTimeout(r,150);
// clearInterval(r);
var f = 0;
    var t ;
    var s = setInterval(r,150);
    var p = setTimeout(g,2000);
function r() {
    random = Math.floor(Math.random() * 99);
    document.getElementById("a").innerHTML = random;
}
// function  all() {
//     if (f <= 10) {
//         r();
//         f = f + 1;
//     }
//     else {
//         clearInterval(s);
//     }
// }
function g() {
        change();
        t =  setInterval(r,300);
       setTimeout(stop,3000);
}
function change() {
        clearInterval(s);
}
function stop() {
    clearInterval(t);
}