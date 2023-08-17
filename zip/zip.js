//[1, 2, 3], [4, 5] //[1, 4], [2, 5]
const getShortestLength = function(list1, list2) {
  return list1.length > list2.length ? list2.length : list1.length;
}

const areObjectsEqual = function(expected, actual) {
  if(expected === actual) {
    return true;
  }

  if(Object.keys(expected).length !== Object.keys(actual).length) {
    return false;
  }

  for(const key in expected) {
    if(expected[key] !== actual[key]) {
      return false;
    }
  }

  return true;
}

const zip = function(list1, list2) {
  const shortestLength = getShortestLength(list1, list2)
  return list1.slice(0, shortestLength).map(function(number, index) {
    return [number, list2[index]];
  });
}

const chunk = function(list, chunkSize) {
  return list.reduce(function(chunks, element) {

    if(chunks.length === 0) {
      chunks.push([]);
    }

    if(chunks[chunks.length - 1].length === chunkSize) {
      chunks.push([]);
    }

    chunks[chunks.length - 1].push(element);

    return chunks;
  }, [])
}

const frequencies = function(string) {

  return string.split("").reduce(function(frequency, character) {
    frequency[character] = character in frequency ? frequency[character] + 1 : 1;

    return frequency;

  }, {});
}

const anagram = function(word1, word2) {
  const string1lettersFrequency = frequencies(word1);
  const string2lettersFrequency = frequencies(word2);
  return areObjectsEqual(string1lettersFrequency, string2lettersFrequency); 
}

const identity = function(element) {
  return element;
}

const extras = function(summary, ball) {
  summary[ball]++;
  summary['totalRuns']++;
  summary['extras']++
  return summary;
}

const addToTotal = function(summary, ball) {
  summary['totalRuns'] += ball;
  return summary;
}

const updateWickets = function(summary) {
  summary['wickets']++;
  return summary;
}

const updateBoundary = function(summary, ball) {
  summary[ball]++;
  summary['totalRuns'] += ball;
  return summary;
}

const events = {
  '0': 'Zero',
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '6': 'Six',
  'W': 'Wicket',
  'WD': 'Wide',
  'NB': 'NoBall',
}

const contribution = {
  'Zero': {Runs: 0, Wickets: 0, Fours: 0, Sixes: 0, Extras: 0, Wides: 0, NoBalls: 0},
  'One': {Runs: 1, Wickets: 0, Fours: 0, Sixes: 0, Extras: 0, Wides: 0, NoBalls: 0},
  'Two': {Runs: 2, Wickets: 0, Fours: 0, Sixes: 0, Extras: 0, Wides: 0, NoBalls: 0},
  'Three': {Runs: 3, Wickets: 0, Fours: 0, Sixes: 0, Extras: 0, Wides: 0, NoBalls: 0},
  'Four': {Runs: 4, Wickets: 0, Fours: 1, Sixes: 0, Extras: 0, Wides: 0, NoBalls: 0},
  'Six': {Runs: 6, Wickets: 0, Fours: 0, Sixes: 1, Extras: 0, Wides: 0, NoBalls: 0},
  'Wicket': {Runs: 0, Wickets: 1, Fours: 0, Sixes: 0, Extras: 0, Wides: 0, NoBalls: 0},
  'Wide': {Runs: 1, Wickets: 0, Fours: 0, Sixes: 0, Extras: 1, Wides: 1, NoBalls: 0},
  'NoBall': {Runs: 1, Wickets: 0, Fours: 0, Sixes: 0, Extras: 1, Wides: 0, NoBalls: 1},
}

const updateSummary = function(summary, delivery) {
  const currentEvent = events[delivery];

  if(currentEvent === undefined) {
    return summary;
  }

  for(const key in summary) {
    summary[key] += contribution[currentEvent][key];
  }

  return summary;
}

const generateMatchSummary = function(overs) {
  const summary = {
    'Runs': 0,
    'Wickets': 0,
    'Fours': 0,
    'Sixes': 0,
    'Extras': 0,
    'Wides': 0,
    'NoBalls': 0,
  }

  const deliveryLog = overs.flat();

  return deliveryLog.reduce(updateSummary, summary);
}

/*
const generateMatchSummary = function(overs) {
  const events = {
    'WD': extras,
    'NB': extras,
    'W': updateWickets,
    '0': addToTotal,
    '1': addToTotal,
    '2': addToTotal,
    '3': addToTotal,
    '4': updateBoundary,
    '6': updateBoundary,
  };

  const deliveryLog = overs.flat();

  return deliveryLog.reduce(function(summary, delivery){
    if(delivery === '') return summary;
    return events[delivery](summary, delivery);
  }, {totalRuns: 0, '4': 0, '6': 0, wickets: 0, extras: 0, NB: 0, WD: 0});
}

 */
console.log(generateMatchSummary([[1, 'W', 0, 0, 6, 'NB'], [1, 2, 3, 4,'WD', 0]]));

const doubleUp = function(number) {
  return number * 2;
}

const isEven = function(number) {
  return number % 2 === 0;
}

const map = function(list, mapper) {
  return list.reduce(function(transformedList, element) {
    transformedList.push(mapper(element));
    return transformedList;
  }, []);
}

const filter = function(list, predicate) {
  return list.reduce(function(filteredList, element) {
    if(predicate(element)) {
      filteredList.push(element);
    }
    return filteredList;
  }, []);
}

exports.generateMatchSummary = generateMatchSummary;
exports.doubleUp = doubleUp;
exports.map = map;
