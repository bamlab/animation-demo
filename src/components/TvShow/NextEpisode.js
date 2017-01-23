import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import appStyle from 'animationDemo/src/appStyle';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  square: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    color: appStyle.colors.primary,
    fontSize: appStyle.font.fontSize.huge,
    maxWidth: 140,
  },
});

const NextEpisode = props => (
  <TouchableHighlight onPress={props.onPress} underlayColor="white" style={[
    styles.touchable,
    props.style,
  ]}>
    <View style={[styles.square, { backgroundColor: props.color}]}>
      <Animatable.Text style={styles.text} animation="fadeInUp" delay={400}>
        {props.tvShow.vote_average}
      </Animatable.Text>
    </View>
  </TouchableHighlight>
);

NextEpisode.propTypes = {
  tvShow: PropTypes.object.isRequired,
  style: PropTypes.any,
  color: PropTypes.string,
};

NextEpisode.defaultProps = {
  color: 'white',
};

export default NextEpisode;

