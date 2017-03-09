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
    heart: {
      screen: Pages.Heart,
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

export default Navigator;
