import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from './src/config/router';

const App = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafaff',
  },
});
