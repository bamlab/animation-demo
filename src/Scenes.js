import React, { Component } from 'react';
import { BackAndroid } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import appStyle from './appStyle';

import * as Pages from './pages';

export const Navigator = StackNavigator(
  {
    home: {
      screen: Pages.Home,
    },
    button: {
      screen: Pages.Button,
    },
    pageTransition: {
      screen: Pages.PageTransition,
    },
    scrollAnimation: {
      screen: Pages.ScrollAnimation,
    },
    scrollAnimatedTvShow: {
      screen: Pages.ScrollAnimatedTvShow,
    },
    svg: {
      screen: Pages.Svg,
    },
  },
  {
    initialRouteName: 'home',
    headerMode: 'screen',
    navigationOptions: {
      header: {
        tintColor: appStyle.colors.lightText,
        style: {
          backgroundColor: appStyle.colors.primary,
          borderBottomWidth: 0,
        },
      },
    },
  },
);

class Scenes extends Component {
  handleBackPress = () => {
    if (this.navigation && this.navigation.state.routes.length > 1) {
      this.navigation.goBack();
      return true;
    }
    return false;
  };

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {
    return <Navigator ref={navigation => this.navigation = navigation} />;
  }
}

export default Scenes;
