import React from 'react';

import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.WhiteText : styles.WhiteText}>
        Hello World!
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'flex-start', justifyContent: 'center'}, //AlignItems : works from left to right and Justifycontent works from top to bottomn on the screen.
  WhiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;
