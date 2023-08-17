function calculateDistance (x1, x2, y1, y2) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
}

function pointIsInsideCircle (cx, cy, x, y, radius) {
  return (calculateDistance(cx, cy, x, y) <= radius);
}

console.log(pointIsInsideCircle(1, 4, 1, 5, 6));
