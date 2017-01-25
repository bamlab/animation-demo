import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'animationDemo/src/components';


import { Components } from 'exponent';
const { Svg: { Line } } = Components;

const { Svg } = Components;

import appStyle from 'animationDemo/src/appStyle';

import { Page } from 'animationDemo/src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const iterpolate = (value, from, to) => (from + value * (to - from));

class SvgPage extends React.Component {

  constructor() {
    super();
    this.state = {
      value: new Animated.Value(0),
      menu: true,
    };
    this.state.value.addListener(this.onValueChange.bind(this));

  }

  onValueChange({ value }) {
    this.line1.setNativeProps({
      y1:  `${iterpolate(value, 24, 9)}`,
      y2:  `${iterpolate(value, 24, 41)}`,
    });
    this.line2.setNativeProps({
      y1:  `${iterpolate(value, 14, 9)}`,
      y2:  `${iterpolate(value, 14, 41)}`,
    });
    this.line3.setNativeProps({
      y1:  `${iterpolate(value, 33, 41)}`,
      y2:  `${iterpolate(value, 33, 9)}`,
    });
  }

  toggle() {
    if (this.state.menu) {
      Animated.timing(  // Uses easing functions
        this.state.value,  // The value to drive
        {toValue: 1}  // Configuration
      ).start();

      return this.setState({ menu: false });
    }
    this.setState({ menu: true });
    Animated.timing(
      this.state.value,
      {toValue: 0}
    ).start();
  }

  render() {
    return (
      <Page>
        <Button onPress={() => this.toggle()}>Launch</Button>
          <View style={styles.container}>
            <Svg width={50} height={50} >
              <Line x1="9" y1="24" x2="41" y2="24" strokeWidth="3" stroke="black"
                    ref={ref => this.line1 = ref} />
              <Line x1="9" y1="14" x2="41" y2="14" strokeWidth="3" stroke="black"
                    ref={ref => this.line2 = ref} />
              <Line x1="9" y1="33" x2="41" y2="33" strokeWidth="3" stroke="black"
                    ref={ref => this.line3 = ref} />
            </Svg>
          </View>
      </Page>
    );
  }
}

export default SvgPage;
