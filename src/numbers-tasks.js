/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(width, height) {
  return width * height;
}

getRectangleArea(5, 10);
getRectangleArea(5, 5);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
getCircleCircumference(5);
getCircleCircumference(3.45);
getCircleCircumference(0);

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}
getAverage(5, 5);
getAverage(10, 0);
getAverage(-3, 3);
getAverage(1e308, 1e308);

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance;
}
getDistanceBetweenPoints(0, 0, 0, 1);
getDistanceBetweenPoints(0, 0, 1, 0);
getDistanceBetweenPoints(-5, 0, 10, -10);

function getLinearEquationRoot(a, b) {
  return -b / a;
}
getLinearEquationRoot(5, -10);
getLinearEquationRoot(1, -8);
getLinearEquationRoot(5, 0);

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}
getAngleBetweenVectors(1, 0, 0, 1);
getAngleBetweenVectors(0, 1, 0, -1);
getAngleBetweenVectors(0, -1, 1, 0);
getAngleBetweenVectors(0, 1, 0, 1);

function getLastDigit(value) {
  return value % 10;
}
getLastDigit(100);
getLastDigit(37);
getLastDigit(5);
getLastDigit(0);

function parseNumberFromString(value) {
  return Number(value);
}
parseNumberFromString('100');
parseNumberFromString('37');
parseNumberFromString('-525.5');

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}
getParallelepipedDiagonal(1, 1, 1);
getParallelepipedDiagonal(3, 3, 3);
getParallelepipedDiagonal(1, 2, 3);

function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}
roundToPowerOfTen(1234, 0);
roundToPowerOfTen(1234, 1);
roundToPowerOfTen(1234, 2);
roundToPowerOfTen(1234, 3);
roundToPowerOfTen(1678, 0);
roundToPowerOfTen(1678, 1);
roundToPowerOfTen(1678, 2);
roundToPowerOfTen(1678, 3);

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(11);
isPrime(12);
isPrime(16);
isPrime(17);

function toNumber(value, def) {
  const num = Number(value);
  return Number.isNaN(num) ? def : num;
}
toNumber(null, 0);
toNumber('test', 0);
toNumber('1', 0);
toNumber(42, 0);
toNumber(Number(42), 0);

function getCube(num) {
  return num ** 3;
}
getCube(3);
getCube(-2);
getCube(0);

function getFibonacciNumber(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= index; i += 1) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
}
getFibonacciNumber(0);
getFibonacciNumber(1);
getFibonacciNumber(1);
getFibonacciNumber(2);
getFibonacciNumber(55);

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}
getSumToN(5);
getSumToN(10);
getSumToN(1);

function getSumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}
getSumOfDigits(123);
getSumOfDigits(202);
getSumOfDigits(5);

function isPowerOfTwo(num) {
  if (num <= 0) return false;
  if (num === 1) return true;
  if (num % 2 !== 0) return false;

  return isPowerOfTwo(num / 2);
}
isPowerOfTwo(4);
isPowerOfTwo(16);
isPowerOfTwo(15);

function getSine(num) {
  return Math.sin(num);
}
getSine(0);
getSine(Math.PI / 2);

function numberToStringInBase(number, base) {
  return number.toString(base);
}
numberToStringInBase(255, 16);
numberToStringInBase(2, 2);

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}
toExponential(12345, 2);

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}
toFixed(12345, 2);
toFixed(12.345, 1);

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}
toPrecision(12345, 7);
toPrecision(12.345, 4);

function getNumberValue(number) {
  return number.valueOf();
}
getNumberValue(5);
getNumberValue(-5);

function isNumber(number) {
  return typeof number === 'number' && Number.isFinite(number);
}
isNumber(Infinity);
isNumber(NaN);
isNumber(0);
isNumber('a');
isNumber(5);
isNumber('5');

function isInteger(number) {
  return typeof number === 'number' && Number.isInteger(number);
}
isInteger(5);
isInteger(5.1);
isInteger('5');

function getFloatOnString(str) {
  return Number.parseFloat(str);
}
getFloatOnString('4.567abcdefgh');
getFloatOnString('abcdefgh');

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base) || NaN;
}
getIntegerOnString('4.567abcdefgh', 10);
getIntegerOnString('abcdefgh', 10);
getIntegerOnString('1.234', 2);
getIntegerOnString('10', 8);

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}
isSafeInteger(10);
isSafeInteger(3.5);
isSafeInteger(2 ** 53);

function roundToSmallestInteger(number) {
  return Math.floor(number);
}
roundToSmallestInteger(5.9);
roundToSmallestInteger(-5.1);

function roundToLargestInteger(number) {
  return Math.ceil(number);
}
roundToLargestInteger(5.1);
roundToLargestInteger(-5.9);

function roundToNearestInteger(number) {
  return Math.round(number);
}
roundToNearestInteger(5.5);
roundToNearestInteger(5.4);
roundToNearestInteger(-5.5);

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}
getIntegerPartNumber(5.5);
getIntegerPartNumber(5.4);
getIntegerPartNumber(-5.5);

function getSumOfNumbers(x1, x2, x3) {
  const sum = x1 + x2 + x3;
  return Number(sum.toFixed(10));
}
getSumOfNumbers(1, 2, 3);
getSumOfNumbers(0.1, 0.2, 0.3);

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}
getMaxNumber(1, 2);
getMaxNumber(-5, -6);
getMaxNumber(0, 5);

function getRandomInteger(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
getRandomInteger(1, 2);
getRandomInteger(-5, 0);
getRandomInteger(-1, 1);

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}
getHypotenuse(3, 4);

function getCountOfOddNumbers(number) {
  const absNumber = Math.abs(number);
  return Math.floor(absNumber / 2) + (absNumber % 2);
}
getCountOfOddNumbers(4);
getCountOfOddNumbers(5);
getCountOfOddNumbers(10);
getCountOfOddNumbers(15);

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
