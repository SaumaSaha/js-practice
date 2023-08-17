const testing = require('./testing.js');
const programs = require('./zip.js');

const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const displayHeader = testing.displayHeader;
const displaySummary = testing.displaySummary;
const generateMatchSummary = programs.generateMatchSummary;
const doubleUp = programs.doubleUp;
const map = programs.map;

displayHeader('generateMatchSummary');
assertObject(
  {totalRuns: 0, '4': 0, '6': 0, wickets: 0, extras: 0, NB: 0, WD: 0},
  generateMatchSummary([[0, 0, 0, 0, 0, 0]]),
  "A maiden over will give all zero in summary",
  'generateMatchSummary'
);

assertObject(
  {totalRuns: 13, '4': 1, '6': 1, wickets: 1, extras: 2, NB: 1, WD: 1},
  generateMatchSummary([['W', 1, 6, 4, 'WD', 'NB']]),
  "To check all the functions working",
  'generateMatchSummary'
);

displayHeader('map');
assertArray(
  [2, 4, 6],
  map([1, 2, 3], doubleUp),
  "Will double each elements of the list",
  'doubleUp'
);
