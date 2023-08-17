const majorAxis = 6;
const minorAxis = 6;

const star = "\033[31m* \033[0m"
const space ="  " 

let pattern = "";
for (let x=-10; x <= 10; x = x+1) {
  for (let y=-20; y <= 20; y = y+1) {
    let currentPixel = Math.floor(((x*x) / (majorAxis*majorAxis)) + ((y*y) / (minorAxis*minorAxis))) == 1 ? star : space;
    // console.log(Math.floor((x*x) / (majorAxis*majorAxis)))
    pattern = pattern + currentPixel;
  } 
  pattern = pattern + "\n";
}
console.log(pattern);
