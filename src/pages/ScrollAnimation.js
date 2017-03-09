import React, { Component, PropTypes } from 'react';
import { StyleSheet, ListView, ActivityIndicator, View } from 'react-native';

import { Page, TvShowListItem } from 'animationDemo/src/components';

import data from '../assets/tvShowsData';

class ScrollAnimation extends Component {

  static navigationOptions = {
    title: 'Scroll Animation',
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.id !== r2.id}
    );
    this.state = {
      dataSource: ds.cloneWithRows(data.results),
    };
  }

  render() {
    return (
      <Page noMargin backgroundColor="#37474f">
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(tvShow, sectionID, rowID) => (
            <View style={{ flex: 1 }} >
              <TvShowListItem
                tvShow={tvShow} index={rowID}
                noAnimation
                onPress={() => this.props.navigation.navigate('scrollAnimatedTvShow', { tvShowContent: tvShow })}
              />
            </View>
          )}
          enableEmptySections
        />
      </Page>
    );
  }
}

export default ScrollAnimation;
