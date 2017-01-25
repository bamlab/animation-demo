import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import appStyle from 'animationDemo/src/appStyle';

import { Page, Button } from 'animationDemo/src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: appStyle.colors.primary,
  },
});

const Home = () => (
  <Page>
    <View style={styles.container}>
      <Button onPress={Actions.button} style={styles.button}>Button</Button>
      <Button onPress={Actions.pageTransition} style={styles.button}>Page Transition</Button>
      <Button onPress={Actions.scrollAnimation} style={styles.button}>Scroll Animation</Button>
      <Button onPress={Actions.svg} style={styles.button}>SVG</Button>
    </View>
  </Page>
);

export default Home;
