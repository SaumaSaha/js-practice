function red (text) {
  return "\033[31m" + text + "\033[0m";
}
function green (text) {
  return "\033[32m" + text + "\033[0m";
}

// ++++++++++++++++++++++++++++++++++++++++++++++FUNCTIONS TO CONVERT TEMPERATURE UNIT++++++++++++++++++++++++++++++++++++++++++++++
function convertCelsiusToFahrenheit(celsius) {
  return ((celsius * (9/5)) + 32);
}

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * (5/9));
}

function convertKelvinToCelsius(kelvin) {
  return (kelvin - 273.15);
}

function convertCelsiusToKelvin(celsius) {
  return (celsius + 273.15);
}

function convertKelvinToFahrenheit(kelvin) {
  return (convertCelsiusToFahrenheit(convertKelvinToCelsius(kelvin)));
}

function convertFahrenheitToKelvin(fahrenheit) {
  return (convertCelsiusToKelvin(convertFahrenheitToCelsius(fahrenheit)));
}

function convertToStandard (temperature, source) {
  switch (source) {
    case "KELVIN" : return convertKelvinToCelsius(temperature);
    case "FAHRENHEIT" : return convertFahrenheitToCelsius(temperature);
    case "CELSIUS" : return temperature;
  }
}

function convertToTarget (temperature, target) {
  switch (target) {
    case "KELVIN" : return convertCelsiusToKelvin(temperature);
    case "FAHRENHEIT" : return convertCelsiusToFahrenheit(temperature);
    case "CELSIUS" : return temperature; 
  }
}

function convertTemperatureUnit (temperature, source, target) {
  const celsius = convertToStandard(temperature, source);
  return convertToTarget(celsius, target);
}

function assertTest(testTitle, actual, expected) {
  const isTestPassed = actual === expected;

  let message = "❌ Test Failed";
  let actualMessage = red("Actual\t:\t" + actual);
  const expectedMessage = green("Expected\t:\t" + expected); 

  if (isTestPassed) {
    message = "✅ Test Passed";
    actualMessage = green("Actual\t:\t" + actual);
  }

  console.log(message, " | ", testTitle);
  console.log(expectedMessage);
  console.log(actualMessage);
}

assertTest("Converting 0°C to Fahrenheit", (convertTemperatureUnit(0, "CELSIUS", "FAHRENHEIT")), 32);
assertTest("Converting 0°C to Fahrenheit",(convertTemperatureUnit(0, "CELSIUS", "FAHRENHEIT")), 31);
console.log(convertTemperatureUnit(32, "FAHRENHEIT", "CELSIUS"));
console.log(convertTemperatureUnit(32, "FAHRENHEIT", "KELVIN"));
console.log(convertTemperatureUnit(-273, "KELVIN", "CELSIUS"));
console.log(convertTemperatureUnit(-273, "KELVIN", "FAHRENHEIT"));

