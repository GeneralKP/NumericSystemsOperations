export enum OpType {
  '/',
  '+',
  '-',
  '*',
}

export type OpResult = {
  result: string;
  decimalResult: number | null;
};
