import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import theme from './theme';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar barStyle="dark-content" backgroundColor={theme.white} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
