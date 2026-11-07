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
export { checkStringLength, checkPalindrome, extractNumbers };
