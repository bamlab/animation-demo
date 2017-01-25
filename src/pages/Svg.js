import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'animationDemo/src/components';


import { Components } from 'exponent';
const {
  Svg: {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
  }
} = Components;

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
    this.g1.setNativeProps({
      rotate: `${iterpolate(value, 0, 45)}`,
    });
    this.g2.setNativeProps({
      rotate: `${iterpolate(value, 0, 45)}`,
    });
    this.g3.setNativeProps({
      rotate: `${iterpolate(value, 0, -45)}`,
    });
    console.log(`${iterpolate(value, 0, 45)}`);
    this.rect1.setNativeProps({
      y: `${iterpolate(value, 24, 25)}`,
    });
    this.rect2.setNativeProps({
      y: `${iterpolate(value, 14, 25)}`,
    });
    this.rect3.setNativeProps({
      y: `${iterpolate(value, 33, 25)}`,
    });
  }

  toggle() {
    console.log('toggle');
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
              <G
                rotate="0"
                origin="25, 25"
                ref={ref => this.g1 = ref}
              >
                <Line x="9" y="24" width="32" height="3" ref={ref => this.rect1 = ref} />
              </G>
              <G
                rotate="0"
                origin="25, 25"
                ref={ref => this.g2 = ref}
              >
                <Line x="9" y="14" width="32" height="3" ref={ref => this.rect2 = ref} />
              </G>
              <G
                rotate="0"
                origin="25, 25"
                ref={ref => this.g3 = ref}
              >
                <Line x="9" y="33" width="32" height="3" ref={ref => this.rect3 = ref} />
              </G>
            </Svg>
          </View>
      </Page>
    );
  }
}

export default SvgPage;
