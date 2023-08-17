// [4, 4, 4]
// ["****", "****", "****", "****"]

// [[4], [4, 4], [4]]
// ["****", "*  *", "*  *", "****"]

const repeat = function(character, times) {
  return character.repeat(times);
}

const stars = function(width) {
  return repeat("*", width);
}

const spaces = function(width) {
  return repeat(" ", width);
}

const hollowLine = function(width) {
  return stars(1) + spaces(width - 2) + stars(1);
}

const applyStyle = function(style, lineWidths) {
  return lineWidths.map(style);
}

const applyStyleGroups = function(styles, lineWidthGroups) {
  return styles.flatMap(function(style, index) {
    return applyStyle(style, lineWidthGroups[index]);
  });
}

const rectangle = function(length, breadth) {
  const lineWidths = [];
  for(let index = 0; index < breadth; index++) {
    lineWidths.push(length);
  }

  return lineWidths;
}

const triangle = function(size) {
  const lineWidths = [];
  for(let index = 1; index <= size; index++) {
    lineWidths.push(index);
  }

  return lineWidths;
}

const filled = function(lineWidths) {
  const lineWidthGroups = [];
  lineWidthGroups.push(lineWidths);
  return lineWidthGroups;
}

const hollow = function(lineWidths) {
  const length = lineWidths.length;
  const lineWidthGroups = [];
  lineWidthGroups.push([lineWidths[0]]);
  lineWidthGroups.push(lineWidths.slice(1, length - 1));
  lineWidthGroups.push([lineWidths[length - 1]]);
  return lineWidthGroups;
}

const filledStyle = function() {
  return [stars];
}

const hollowStyle = function() {
  return [stars, hollowLine, stars];
}

const generateStyle = function(style) {
  const styles = {
    filled: filledStyle,
    hollow: hollowStyle
  }

  return styles[style]();
}

const generateLineWidthGroups = function(style, lineWidths) {
  const styles = {
    filled: filled,
    hollow: hollow
  }

  return styles[style](lineWidths);
}

const generatePattern = function(style, lineWidths) {
  const lineWidthGroups = generateLineWidthGroups(style, lineWidths);
  const styles = generateStyle(style, lineWidthGroups);
  return applyStyleGroups(styles, lineWidthGroups).join('\n');
}

const generateRectangle = function(length, breadth) {
  const lineWidths = rectangle(length, breadth);
  return generatePattern('filled', lineWidths);
}

const generateHollowRectangle = function(length, breadth) {
  const lineWidths = rectangle(length, breadth);
  return generatePattern('hollow', lineWidths);
}

const generateTriangle = function(size) {
  const lineWidths = triangle(size);
  return generatePattern('filled', lineWidths);
}

const generateHollowTriangle = function(size) {
  const lineWidths = triangle(size);
  return generatePattern('hollow', lineWidths);
}

exports.generateRectangle = generateRectangle;
exports.generateHollowRectangle = generateHollowRectangle;
exports.generateTriangle = generateTriangle;
exports.generateHollowTriangle = generateHollowTriangle;
