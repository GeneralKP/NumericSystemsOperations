// vendors
import React, { useState } from 'react';
import { Title, TextInput, Button, Paragraph } from 'react-native-paper';
// commons
import Container from '../common/layout/container';
// utils
import { binary2decimal, testIfOnlyHasNumberCharacters } from '../common/utils/commons.utils';
import { showErrorMessage } from '../common/utils/error.utils';
import { decimalOp } from './utils/binaryAritmeticOperations.utils';
// types
import { OpType } from './types/binaryAritmeticOperations.types';
import type { OpResult } from './types/binaryAritmeticOperations.types';
import { StyleSheet } from 'react-native';

const BinaryAritmeticOperations = () => {
  const [binaryNumbers, setBinaryNumbers] = useState<{
    first: string;
    second: string;
    firstDecimal: string;
    secondDecimal: string;
  }>({
    first: '',
    second: '',
    firstDecimal: '',
    secondDecimal: '',
  });

  const [result, setResult] = useState<OpResult>({
    result: '',
    decimalResult: null,
  });

  const setBinaryNumbersText = (text: string, number: string) => {
    try {
      testIfOnlyHasNumberCharacters(text, 2);
      setBinaryNumbers({
        ...binaryNumbers,
        [number]: text,
        [`${number}Decimal`]: binary2decimal(text),
      });
    } catch (error) {
      showErrorMessage({});
    }
  };

  return (
    <Container>
      <Title>Operaciones aritméticas entre binarios</Title>
      <TextInput
        label="Número 1"
        mode="outlined"
        value={binaryNumbers.first}
        onChangeText={text => setBinaryNumbersText(text, 'first')}
      />
      <TextInput
        label="Número 2"
        mode="outlined"
        value={binaryNumbers.second}
        onChangeText={text => setBinaryNumbersText(text, 'second')}
      />
      <Button
        mode="outlined"
        onPress={() => {
          setResult(
            decimalOp(OpType['+'], binaryNumbers.firstDecimal, binaryNumbers.secondDecimal),
          );
        }}>
        Sumar
      </Button>
      <Button
        mode="contained"
        onPress={() =>
          setResult(decimalOp(OpType['-'], binaryNumbers.firstDecimal, binaryNumbers.secondDecimal))
        }>
        Restar
      </Button>
      <Button
        mode="outlined"
        onPress={() => {
          setResult(
            decimalOp(OpType['*'], binaryNumbers.firstDecimal, binaryNumbers.secondDecimal),
          );
        }}>
        Multiplicar
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          setResult(
            decimalOp(OpType['/'], binaryNumbers.firstDecimal, binaryNumbers.secondDecimal),
          );
        }}>
        Dividir
      </Button>
      <Container style={sytles.secondContainer}>
        <Title>El resultado es: {result.result} </Title>
        <Paragraph>{result.decimalResult && `(Decimal: ${result.decimalResult})`}</Paragraph>
      </Container>
    </Container>
  );
};

export const sytles = StyleSheet.create({
  secondContainer: {
    height: 200,
  },
});

export default BinaryAritmeticOperations;
