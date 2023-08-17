function calculateDistance (x1, x2, y1, y2) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
}

function assert (actualOutput, expectedOutput) {
  let passed = "Asserting " + actualOutput + " is equal to " + expectedOutput + " : Test Passed✅";
  let failed  = "Asserting " + actualOutput + " is equal to " + expectedOutput + " : Test Failed❌";

  console.log(actualOutput == expectedOutput ? passed : failed);
}

function testCalculateDistance () {
  assert(calculateDistance(1, 4, 1, 5), 4);
}
testCalculateDistance();
