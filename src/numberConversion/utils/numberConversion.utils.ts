export const decimal2Octal = (decimalNumberText: string): string => {
  if (!decimalNumberText) return '';
  const decimalNumber = parseInt(decimalNumberText);
  return decimalNumber.toString(8);
};

export const decimal2Hexadecimal = (decimalNumberText: string): string => {
  if (!decimalNumberText) return '';
  const decimalNumber = parseInt(decimalNumberText);
  return decimalNumber.toString(16);
};

export const hexadecimal2decimal = (hexadecimaNumberText: string): string => {
  if (!hexadecimaNumberText) return '';
  const decimalNumber = parseInt(hexadecimaNumberText, 16);
  return decimalNumber.toString();
};

export const octal2decimal = (octalNumberText: string): string => {
  if (!octalNumberText) return '';
  const decimalNumber = parseInt(octalNumberText, 8);
  return decimalNumber.toString();
};
