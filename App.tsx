import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './src/common/entryPoint';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
