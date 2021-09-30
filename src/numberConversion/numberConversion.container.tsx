// vendors
import React, { useState } from 'react';
import { Title, TextInput } from 'react-native-paper';
// commons
import Container from '../common/layout/container';
// utils
import {
  decimal2Binary,
  binary2decimal,
  testIfOnlyHasNumberCharacters,
} from '../common/utils/commons.utils';
import { showErrorMessage } from '../common/utils/error.utils';
import {
  decimal2Octal,
  decimal2Hexadecimal,
  octal2decimal,
  hexadecimal2decimal,
} from './utils/numberConversion.utils';

const NumberConversion = () => {
  const [decimalText, setDecimalText] = useState('');
  const [binaryText, setBinaryText] = useState('');
  const [octalText, setOctalText] = useState('');
  const [hexadecimalText, setHexadecimalText] = useState('');

  const decimalChange = (text: string) => {
    try {
      testIfOnlyHasNumberCharacters(text, 10);
      setDecimalText(text);
      setBinaryText(decimal2Binary(text));
      setOctalText(decimal2Octal(text));
      setHexadecimalText(decimal2Hexadecimal(text));
    } catch (error) {
      showErrorMessage({});
    }
  };

  const binaryChange = (text: string) => {
    try {
      testIfOnlyHasNumberCharacters(text, 2);
      const decimalNumber = binary2decimal(text);
      setBinaryText(text);
      setDecimalText(decimalNumber);
      setOctalText(decimal2Octal(decimalNumber));
      setHexadecimalText(decimal2Hexadecimal(decimalNumber));
    } catch (error) {
      showErrorMessage({});
    }
  };

  const octalChange = (text: string) => {
    try {
      testIfOnlyHasNumberCharacters(text, 8);
      const decimalNumber = octal2decimal(text);
      setOctalText(text);
      setDecimalText(decimalNumber);
      setBinaryText(decimal2Binary(decimalNumber));
      setHexadecimalText(decimal2Hexadecimal(decimalNumber));
    } catch (error) {
      showErrorMessage({});
    }
  };

  const hexadecimalChange = (text: string) => {
    try {
      testIfOnlyHasNumberCharacters(text, 16);
      const decimalNumber = hexadecimal2decimal(text);
      setHexadecimalText(text);
      setDecimalText(decimalNumber);
      setBinaryText(decimal2Binary(decimalNumber));
      setOctalText(decimal2Octal(decimalNumber));
    } catch (error) {
      showErrorMessage({
        errorTitle: 'Introduzca caracteres válidos',
        errorMessage: 'Solo se aceptan estos números y letras: [0-9] [a-f]',
      });
    }
  };

  return (
    <Container>
      <Title>Conversión de números</Title>
      <TextInput
        label="Decimal"
        mode="outlined"
        value={decimalText}
        onChangeText={text => decimalChange(text)}
      />
      <TextInput
        label="Binario"
        mode="outlined"
        value={binaryText}
        onChangeText={text => binaryChange(text)}
      />
      <TextInput
        label="Octal"
        mode="outlined"
        value={octalText}
        onChangeText={text => octalChange(text)}
      />
      <TextInput
        label="Hexadecimal"
        mode="outlined"
        value={hexadecimalText}
        onChangeText={text => hexadecimalChange(text)}
      />
    </Container>
  );
};

export default NumberConversion;
