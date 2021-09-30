import React from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

const Container = ({
  children,
  ...props
}: React.PropsWithChildren<{}> & TouchableWithoutFeedbackProps) => (
  <TouchableWithoutFeedback
    style={styles.superContainer}
    onPress={() => Keyboard.dismiss()}
    {...props}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
});

export default Container;
