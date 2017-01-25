import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Svg, {
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
} from 'react-native-svg';

import appStyle from 'animationDemo/src/appStyle';

import { Page } from 'animationDemo/src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SvgPage extends React.Component {

  constructor() {
    super();
    this.state = {
      menu: true,
    };
  }

  toggle() {
    if (this.state.menu) {
      return this.setState({ menu: false });
    }
    this.setState({ menu: true });
  }

  render() {
    return (
      <Page>
        <TouchableWithoutFeedback onPress={() => this.toggle()}>
          <View style={styles.container}>
            <Svg width={51} height={51} >
              <Rect x="9" y="24" width="32" height="3"/>
              <Rect x="9" y="14" width="32" height="3"/>
              <Rect x="9" y="33" width="32" height="3"/>
            </Svg>
            <Svg width={51} height={51} >
              <Rect x="9" y="24" width="32" height="3" transform="rotate(45 50 50)"/>
              <Rect x="9" y="14" width="32" height="3" transform="rotate(115 50 50)"/>
            </Svg>
          </View>
        </TouchableWithoutFeedback>
      </Page>
    );
  }
}

export default SvgPage;
