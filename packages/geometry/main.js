const { Triangle, Rectangle } = require("shapes");

const tri = new Triangle(4, 2);
const rec = new Rectangle(4, 4);

console.log(tri.area());
console.log(rec.area());
