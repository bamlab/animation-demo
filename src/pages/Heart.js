import React from 'react';
import { View, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Button } from 'animationDemo/src/components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Page } from 'animationDemo/src/components';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Heart extends React.Component {

  static navigationOptions = {
    title: 'Heart',
  };

  constructor() {
    super();
    this.state = {
      value: new Animated.Value(0),
      full: false,
    };
  }


  toggle() {
    this.state.value.setValue(0);
    Animated.timing(this.state.value, {
      toValue: 1,
      duration: 500,
    }).start();

    this.setState({ full: !this.state.full });
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            underlayColor="transparent"
            onPress={() => this.toggle()}
          >
            <AnimatedIcon
              name={this.state.full ? 'heart' : 'heart-o'}
              style={{
                fontSize: 40,
                color: this.state.full ? '#dddd00' : 'black',
                transform: [
                  {
                    scale: this.state.value.interpolate({
                      inputRange: [0, 0.6, 1],
                      outputRange: [1, 1.5, 1],
                    }),
                  },
                ],
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Heart;
