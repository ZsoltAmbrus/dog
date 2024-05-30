

function calculateEllipsoidVolume(a: number, b: number, c: number): number {
    return (4 / 3) * Math.PI * a * b * c;
}

const a = parseFloat(prompt("Enter the length of the first axis (a):") || "0");
const b = parseFloat(prompt("Enter the length of the second axis (b):") || "0");
const c = parseFloat(prompt("Enter the length of the third axis (c):") || "0");

const volume = calculateEllipsoidVolume(a, b, c);
console.log(`The volume of the ellipsoid is: ${volume}`);
alert(`The volume of the ellipsoid is: ${volume}`);
