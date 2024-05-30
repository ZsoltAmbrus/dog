function calculateEllipsoidVolume(a, b, c) {
    return (4 / 3) * Math.PI * a * b * c;
}
var a = parseFloat(prompt("Írd be az első lehetőséget (a):") || "0");
var b = parseFloat(prompt("Írd be a második lehetőséget (b):") || "0");
var c = parseFloat(prompt("Írd be a harmadik lehetőséget (c):") || "0");
var volume = calculateEllipsoidVolume(a, b, c);
console.log("A végeredmény: ".concat(volume));
alert("A végeredmény: ".concat(volume));
