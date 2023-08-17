// ----------------------------------------------------- COLOUR --------------------------------------------------

function style (text,styleCode) {
  return "\033[" + styleCode + "m" + text + "\033[0m";
}

function red (text) {
  return style(text,"31");
}

function green (text) {
  return style(text,"32");
}

function yellow (text) {
  return style(text,"33");
}

// ------------------------------------------------- PRINT HEADLINE --------------------------------------------------

function printHeadline (headline) {
  console.log(yellow(headline));
}

// ------------------------------------------------- ASSERT ARRAY TEST ---------------------------------------------------------

function assertArrayTest (actual, expected, testTitle) {
  const isTestPassed = areArraysEqual(actual, expected);

  let message = "❌ Test Failed";
  let actualMessage = red("Actual\t\t:\t" + actual);
  const expectedMessage = green("Expected\t:\t" + expected);

  if (isTestPassed) {
    message = "✅ Test Passed";
    actualMessage = green("Actual\t\t:\t" + actual);
  }

  console.log(message, " - ", testTitle);
  console.log(expectedMessage);
  console.log(actualMessage);
}

// ----------------------------------------------------- ASSET TEST --------------------------------------------------------

function assertTest (actual, expected, testTitle) {
  const isTestPassed = actual === expected;

  let message = "❌ Test Failed";
  let actualMessage = red("Actual\t\t:\t" + actual);
  const expectedMessage = green("Expected\t:\t" + expected);

  if (isTestPassed) {
    message = "✅ Test Passed";
    actualMessage = green("Actual\t\t:\t" + actual);
  }

  console.log(message, " - ", testTitle);
  console.log(expectedMessage);
  console.log(actualMessage);
}

// --------------------------------------------------IS EVEN FUNCTION-------------------------------------------------- 

function isEven (number) {
  return number % 2 === 0;
}

// ------------------------------------------- CHECK TWO ARRAYS ARE EQUAL OR NOT ---------------------------------------------

function areArraysEqual (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}

function testAreArraysEqual (headline) {
  printHeadline(headline);
  assertTest(areArraysEqual([],[]), true, "Checking two empty arrays");
  assertTest(areArraysEqual([1,2,3],[1,2]), false, "Checking two arrays of different length");
  assertTest(areArraysEqual([1,2,3],["sauma","gourab","swagato"]), false, "Checking two arrays of different types");
  assertTest(areArraysEqual([1,2,3], [3,1,2]), false, "Checking two arrays of same value in different order");
}
// -------------------------------------------- SELECT ODD NUMBERS FROM A LIST --------------------------------------------------

function selectOddFromList (list) {
  const oddNumbers = [];

  for (let index = 0; index < list.length; index++) {
    if (!isEven(list[index])) {
      oddNumbers.push(list[index]);
    }
  }

  return oddNumbers;
}

function testSelectOddFromList (headline) {
  printHeadline(headline);
  assertArrayTest(selectOddFromList([2,4,6,8,10]), [], "No number is odd in the list");
  assertArrayTest(selectOddFromList([2,4,5,6]), [5],"One number is odd in the list");
  assertArrayTest(selectOddFromList([3,5,7,-1]), [3,5,7,-1], "All numbers are odd in the list");
}

// -------------------------------------------- SELECT EVEN NUMBERS FROM A LIST -------------------------------------------------

function selectEvenFromList (list) {
  const evenNumbers = [];

  for (let index = 0; index < list.length; index++) {
    if (isEven(list[index])) {
      evenNumbers.push(list[index]);
    }
  }

  return evenNumbers;
}

function testSelectEvenFromList (headline) {
  printHeadline(headline);
  assertArrayTest(selectEvenFromList([3,5,7,9,-1]), [],"No number is even in the list");
  assertArrayTest(selectEvenFromList([3,-2,5.7]), [-2],"One number is even in the list");
  assertArrayTest(selectEvenFromList([2,4,6,8,-10]), [2,4,6,8,-10],"All numbers are even in the list");
}

// ---------------------------------------------- SUM OF NUMBERS IN AN ARRAY----------------------------------------------------

function sumOfNumbers (numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index];
  }
  return sum;
}

function testSumOfNumbers (headline) {
  printHeadline(headline);
  assertTest(sumOfNumbers([]), 0,"No element in the array will return 0");
  assertTest(sumOfNumbers([5]), 5,"One element in the array will return that element");
  assertTest(sumOfNumbers([1,2,3,4,5]), 15,"All +ve elements in the array will return a +ve number");
  assertTest(sumOfNumbers([-1,-2,-3,-4,-5]), -15,"All -ve elements in the array will return a -ve number");
}

// ------------------------------------------------- PRODUCT OF NUMBERS ------------------------------------------------------

function productOfNumbers (numbers) {
  let product = 1;

  if (numbers.length === 0) {
    return 0;
  }

  for (let index = 0; index < numbers.length; index++) {
    product = product * numbers[index];
  }
  return product;
}

function testProductOfNumbers (headline) {
  printHeadline(headline);
  assertTest(productOfNumbers([]), 0,"No element in the array will return 0");
  assertTest(productOfNumbers([1]), 1,"One element in the array will return that element");
  assertTest(productOfNumbers([-1,2,4,5]), -40,"One -ve element in the array return a -ve number");
  assertTest(productOfNumbers([1,2,4,5]), 40,"All +ve element in the array return a +ve number");
}

// -------------------------------------------------- REVERSE AN ARRAY --------------------------------------------------

function reverseArray (array) {
  const reverseArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reverseArray.push(array[index]);
  }
  return reverseArray;
}

function testReverseArray (headline) {
  printHeadline(headline);
  assertArrayTest(reverseArray([]), [],"No elements in the array will return an empty array");
  assertArrayTest(reverseArray([1]), [1],"One elements in the array will return the same array ");
  assertArrayTest(reverseArray([1,3,4]), [4,3,1],"More than one elements in the array will return the reverse array ");
}

// ------------------------------------------------ IS ELEMENT PRESENT IN AN ARRAY -------------------------------------------------

function isElementPresent (list,element) {
  let index = 0;

  while (index < list.length) {
    if (list[index] === element) {
      return true;
    }
    index++;
  }
  return false;
}

function testIsElementPresent (headline) {
  printHeadline(headline);
  assertTest(isElementPresent([],1),false,"No element in the array will return false");
  assertTest(isElementPresent([2,1,4,5],1),true,"Element present in the array will return true");
  assertTest(isElementPresent([2,1,4,5],9),false,"Element not present in the array will return false");
  assertTest(isElementPresent([2,"sauma",false,5],"sauma"),true,"Element of different types in the array");
}

// -------------------------------------- RETURN THE INDEX OF THE ELEMENT IF PRESENT IN THE ARRAY --------------------------------

function indexOfElement (list,element) {
  let index = 0;

  while (index < list.length) {
    if (list[index] === element) {
      return index;
    }
    index++;
  }
  return -1;
}

function testindexOfElement (headline) {
  printHeadline(headline);
  assertTest(indexOfElement([],1), -1,"No element in the array will return -1");
  assertTest(indexOfElement([2,1,4,5],4), 2,"Element present in the array will return the index of that element");
  assertTest(indexOfElement([2,1,4,5],9), -1,"Element not present in the array will return -1");
}

// --------------------------------------- REVERSE FIBONACCI SERIES -------------------------------------------------------------

function reverseFibonacci (noOfTerms) {
  const list = [];
  let lastTerm = 0;
  let secondlastTerm = 1;
  let nextTerm;

  for (let index = noOfTerms - 1; index >= 0; index--) {
    list[index] = lastTerm;
    nextTerm = lastTerm + secondlastTerm;
    lastTerm = secondlastTerm;
    secondlastTerm = nextTerm;
  }
  return list;
}

function testReverseFibonacci (headline) {
  printHeadline(headline);
  assertArrayTest(reverseFibonacci(0), [],"No of terms zero returns an empty string");
  assertArrayTest(reverseFibonacci(1), [0],"No of terms one returns an array that has zero");
  assertArrayTest(reverseFibonacci(2), [1,0],"No of terms two returns an array that has zero and one");
  assertArrayTest(reverseFibonacci(5), [3,2,1,1,0],"No of terms five returns an array that has five terms of fibonacci series in reverse order");
}

// ----------------------------------------- GENERATE LENGTH OF WORDS -----------------------------------------------------------

function calculateLengthOfStrings (words) {
  const lengthOfWords = [];

  for (let index = 0; index < words.length; index++) {
    lengthOfWords.push(words[index].length);
  }
  return lengthOfWords;
}

function testCalculateLengthOfStrings (headline) {
  printHeadline(headline);
  assertArrayTest(calculateLengthOfStrings([]), [],"No elements in the array return an empty array");
  assertArrayTest(calculateLengthOfStrings(["sauma","swagato","riya","1"]), [5,7,4,1],"Elements in the array are strings");
  assertArrayTest(calculateLengthOfStrings(["sauma",1,"riya","1"]), [5,,4,1],"Some elements in the array are not strings it gives un difined in that place");
}

// ------------------------------------------ PALINDROME ----------------------------------------------------------

function isPalindromeString (string) {
  let beginIndex = 0;
  let endIndex = string.length - 1;

  while (beginIndex < endIndex) {
    if (string[beginIndex] !== string[endIndex]) {
      return false;
    }
    beginIndex++;
    endIndex--;
  }
  return true;
}

function testisPalindromeString (headline) {
  printHeadline(headline);
  assertTest(isPalindromeString("a"),true,"Single character is a palindrome string and returns true");
  assertTest(isPalindromeString(""),true,"Empty string is a palindrome string and returns true");
  assertTest(isPalindromeString("madam"),true,"Palindrome string and returns true");
  assertTest(isPalindromeString("hello"),false,"Not palindrome string and returns false");
}

// ------------------------------------------- IS CHARACTER PRESENT ---------------------------------------------------------

function isCharacterPresent (string,character) {
  let index = 0;

  while (index < string.length) {
    if (string[index] === element) {
      return true;
    }
    index++;
  }

  return false;
}

function testIsCharacterPresent (headline) {
  printHeadline(headline);
  assertTest(isElementPresent("",'s'),false,"Empty string will return false");
  assertTest(isElementPresent("sauma",'s'),true,"Element present in the array will return true");
  assertTest(isElementPresent("Sauma", 'g'),false,"Element not present in the array will return false");
}

// -------------------------------------------- REVERSED STRING --------------------------------------------------------

function reverseString (string) {
  let reversedString = "";

  for (let index = string.length - 1; index >= 0; index--) {
    reversedString += string[index];
  }
  return reversedString;
}

function testReversedString (headline) {
  printHeadline(headline);
  assertTest(reverseString(""),"","Empty string will return empty string");
  assertTest(reverseString("sauma"),"amuas","string will return a reversed string");
  assertTest(reverseString("s"),"s","single character will return the same character");
  assertTest(reverseString(1),"", "Other than string any other thing will give empty string");
}

// ------------------------------------ FIRST INDEX OF A CHARACTER IN A STRING ---------------------------------------

function firstIndexOf (string, character) {
  let index = 0;

  while (index < string.length){
    if (string[index] === character ) {
      return index;
    }
    index++;
  }
  return -1;
}

function testFirstIndexOf (headline) {
  printHeadline(headline);
  assertTest(firstIndexOf("",'a'), -1, "Empty string will return -1");
  assertTest(firstIndexOf("sauma",'a'), 1, "If the character is present it will return the first index");
  assertTest(firstIndexOf("sauma",'b'), -1, "If the character is not present it will return -1");

}

// ------------------------------------ LAST INDEX OF A CHARACTER IN A STRING ---------------------------------------

function lastIndexOf (string, character) {
  let index = string.length;

  while (index >= 0) {
    if (string[index] === character ) {
      return index;
    }
    index--;
  }
  return -1;
}

function testLastIndexOf (headline) {
  printHeadline(headline);
  assertTest(lastIndexOf("",'a'), -1, "Empty string will return -1");
  assertTest(lastIndexOf("sauma",'a'), 4, "If the character is present it will return the last index");
  assertTest(lastIndexOf("sauma",'b'), -1, "If the character is not present it will return -1");
}

// ------------------------------------------------ ARRAY OF WORDS -----------------------------------------------------------

function arrayOfWords (sentence) {
  let word = "";
  const words = [];
  sentence = sentence + " ";

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
      word = word + sentence[index];
    } else if (word !== ""){
      words.push(word);
      word = "";
    }
  }
  return words;
}

function testArrayOfWords (headline) {
  printHeadline(headline);
  assertArrayTest(arrayOfWords(""),[],"If we give an empty sentence the function returns an array with an empty string");
  assertArrayTest(arrayOfWords("Hello, this is ashish. Today is an awesome day"),["Hello,", "this", "is", "ashish.", "Today", "is", "an", "awesome", "day"],"If a sentence is given it returns the array of words in the sentence");
}

// --------------------------------------------------------TESTS-------------------------------------------------------

function runTest () {
  testSelectOddFromList("Testing selectOddFromList()");
  testSelectEvenFromList("Testing selectEvenFromList()");
  testSumOfNumbers("Testing sumOfNumbers()");
  testProductOfNumbers("Testing productOfNumbers()");
  testReverseArray("Testing reverseArray()");
  testIsElementPresent("Testing isElementPresent()");
  testindexOfElement("Testing indexOfElement()");
  testReverseFibonacci("Testing reverseFibonacci()");
  testAreArraysEqual("Testing areArraysEqual()");
  testCalculateLengthOfStrings("Testing calculateLengthOfStrings()");
  testisPalindromeString("Testing isPalindromeString()");
  testIsCharacterPresent("Testing isCharacterPresent()");
  testReversedString("Testing reverseString()");
  testFirstIndexOf("Testing firstIndexOf()");
  testLastIndexOf("Testing lastIndexOf()");
  testArrayOfWords("Testing arrayOfWords()");
}

runTest();
//hello hi
