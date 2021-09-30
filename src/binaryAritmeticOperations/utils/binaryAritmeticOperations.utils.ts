// types
import { OpResult, OpType } from '../types/binaryAritmeticOperations.types';

export const decimalOp = (type: OpType, numText1: string, numText2: string): OpResult => {
  if (!numText1 || !numText2) return { result: '', decimalResult: null };
  const num1 = parseFloat(numText1);
  const num2 = parseFloat(numText2);
  if (type === OpType['*']) {
    return { result: (num1 * num2).toString(2), decimalResult: num1 * num2 };
  } else if (type === OpType['-']) {
    return { result: (num1 - num2).toString(2), decimalResult: num1 - num2 };
  } else if (type === OpType['+']) {
    return { result: (num1 + num2).toString(2), decimalResult: num1 + num2 };
  } else {
    return { result: (num1 / num2).toString(2), decimalResult: num1 / num2 };
  }
};
