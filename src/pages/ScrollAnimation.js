import React, { Component, PropTypes } from 'react';
import { StyleSheet, ListView, ActivityIndicator, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

import { Page, TvShowListItem } from 'animationDemo/src/components';

import data from '../assets/tvShowsData';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#90a4ae',
    flex: 1,
    justifyContent: 'center',
  },
});

class ScrollAnimation extends Component {

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
      <Page backgroundColor="#37474f">
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(tvShow, sectionID, rowID) => (
            <View style={{ flex: 1 }} >
              <TvShowListItem
                tvShow={tvShow} index={rowID}
                noAnimation
                onPress={() => Actions.scrollAnimatedTvShow({ tvShowContent: tvShow })}
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
