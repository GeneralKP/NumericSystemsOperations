export const testIfOnlyHasNumberCharacters = (text: string, base: number): void => {
  const hexadecimalRe = '[^A-Fa-f0-9_]';
  const re = new RegExp(base === 16 ? hexadecimalRe : `[^0-${base - 1}]`, 'g');
  if (re.test(text)) throw new Error('Is not a valid input');
};

export const binary2decimal = (binary2decimalNumberText: string): string => {
  if (!binary2decimalNumberText) return '';
  const decimalNumber = parseInt(binary2decimalNumberText, 2);
  return decimalNumber.toString();
};

export const decimal2Binary = (decimalNumberText: string): string => {
  if (!decimalNumberText) return '';
  const decimalNumber = parseInt(decimalNumberText);
  return decimalNumber.toString(2);
};
