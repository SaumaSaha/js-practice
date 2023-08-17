const testing = require('./testing.js');
const pattern = require('./pattern.js');

const generateRectangle = pattern.generateRectangle;
const generateTriangle = pattern.generateTriangle;
const generateHollowTriangle = pattern.generateHollowTriangle;
const generateHollowRectangle = pattern.generateHollowRectangle;
const assert = testing.assertTest;

assert(generateRectangle(0, 0), "", "Gives an empty string", "generateRectangle");
assert(generateRectangle(1, 1), "*", "Generates a rectangle of 1 x 1", "generateRectangle");
assert(generateRectangle(4, 3), "****\n****\n****", "Generates a rectangle of 4 x 3", "generateRectangle");

assert(generateHollowRectangle(0, 0), "\n", "Gives an empty string", "generateHollowRectangle");
assert(generateHollowRectangle(4, 4), "****\n*  *\n*  *\n****", "Gives an empty string", "generateHollowRectangle");

assert(generateTriangle(5), "*\n**\n***\n****\n*****", "Gives a right aligned triagle of size 5", "generateTriangle");
console.log(generateHollowTriangle(5));
