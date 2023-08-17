function grid(gridX, gridY, character) {

  let grid = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];

  for (let x = 0; x < gridX; x++) {
    for (let y = 0; y < gridY; y++) {
      grid[x][y] = character;
    }
  }

  for ( let x = 0; x < gridX; x++) {
    let row = "";
    for (let y = 0; y < gridY; y++) {
      row += grid[x][y];
    }
    console.log(row);
  }
}
grid(5, 5, "* ");

