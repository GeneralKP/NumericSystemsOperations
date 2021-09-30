// vendors
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Title, TextInput, Paragraph, Button } from 'react-native-paper';
// commons
import Container from '../common/layout/container';
// utils
import { testIfOnlyHasNumberCharacters } from '../common/utils/commons.utils';
import { showErrorMessage } from '../common/utils/error.utils';

const BinaryLogicOperations = () => {
  const [binaryNumbers, setBinaryNumbers] = useState<{
    first: string;
    second: string;
  }>({
    first: '',
    second: '',
  });

  const [result, setResult] = useState<{
    AND: string;
    OR: string;
    XOR: string;
  }>({
    AND: '',
    OR: '',
    XOR: '',
  });

  const setBinaryNumbersText = (text: string, number: string) => {
    try {
      testIfOnlyHasNumberCharacters(text, 2);
      setBinaryNumbers({
        ...binaryNumbers,
        [number]: text,
      });
    } catch (error) {
      showErrorMessage({});
    }
  };

  const operate = () => {
    let max: number;
    let min: number;
    if (binaryNumbers.first.length > binaryNumbers.second.length) {
      max = parseInt(binaryNumbers.first);
      min = parseInt(binaryNumbers.second);
    } else {
      max = parseInt(binaryNumbers.second);
      min = parseInt(binaryNumbers.first);
    }
    setResult({
      AND: (max && min).toString(),
      OR: (max || min).toString(),
      // eslint-disable-next-line no-bitwise
      XOR: (max ^ min).toString(),
    });
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
      <Button mode="contained" onPress={operate}>
        Operar
      </Button>
      <Container style={sytles.secondContainer}>
        <Paragraph>
          <Title>AND: </Title>
          {result.AND}
        </Paragraph>
        <Paragraph>
          <Title>OR: </Title>
          {result.OR}
        </Paragraph>
        <Paragraph>
          <Title>XOR: </Title>
          {result.XOR}
        </Paragraph>
      </Container>
    </Container>
  );
};

export const sytles = StyleSheet.create({
  secondContainer: {
    height: 200,
  },
});

export default BinaryLogicOperations;
