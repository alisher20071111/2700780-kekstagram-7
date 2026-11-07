const checkStringLength = (string, maxLength) =>
  string.length <= maxLength;

const checkPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');

  return normalizedString === reversedString;
};

const extractNumbers = (string) => {
  const numbers = string.toString().replace(/\D/g, '');

  return numbers === '' ? NaN : Number(numbers);
};

const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

export {
  checkStringLength,
  checkPalindrome,
  extractNumbers,
  getRandomInteger,
  getRandomArrayElement
};
