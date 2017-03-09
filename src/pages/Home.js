import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const Home = (props) => (
  <Page>
    <View style={styles.container}>
      <Button onPress={() => props.navigation.navigate('button')} style={styles.button}>Button</Button>
      <Button onPress={() => props.navigation.navigate('pageTransition')} style={styles.button}>Page Transition</Button>
      <Button onPress={() => props.navigation.navigate('heart')} style={styles.button}>Heart</Button>
      <Button onPress={() => props.navigation.navigate('scrollAnimation')} style={styles.button}>Scroll Animation</Button>
      <Button onPress={() => props.navigation.navigate('svg')} style={styles.button}>SVG</Button>
    </View>
  </Page>
);

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
