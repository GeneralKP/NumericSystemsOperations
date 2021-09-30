import Toast from 'react-native-toast-message';

export const showErrorMessage = ({
  errorMessage = 'Para este input, solo se puede introducir los números indicados',
  errorTitle = 'Inserte números correctos',
}: {
  errorMessage?: string;
  errorTitle?: string;
}) => {
  Toast.show({
    type: 'error',
    position: 'bottom',
    text1: errorTitle,
    text2: errorMessage,
  });
};
