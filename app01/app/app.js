function calculateEllipsoidVolume(a, b, c) {
    return (4 / 3) * Math.PI * a * b * c;
}
var a = parseFloat(prompt("Enter the length of the first axis (a):") || "0");
var b = parseFloat(prompt("Enter the length of the second axis (b):") || "0");
var c = parseFloat(prompt("Enter the length of the third axis (c):") || "0");
var volume = calculateEllipsoidVolume(a, b, c);
console.log("The volume of the ellipsoid is: ".concat(volume));
alert("The volume of the ellipsoid is: ".concat(volume));
