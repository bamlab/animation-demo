import React, { PropTypes } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    zIndex: 1,
    resizeMode: 'cover',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: .30,
    shadowRadius: 10,
    marginLeft: 15,
    marginRight: 5,
  },
});

const TvShowImage = props => (
  <View style={[ styles.container, props.noShadow ? null : styles.shadow, props.style]}>
    <Image source={{uri: `https://image.tmdb.org/t/p/w500/${props.tvShow.backdrop_path}`}}
           style={styles.image}
      />
  </View>
);

TvShowImage.propTypes = {
  tvShow: PropTypes.object.isRequired,
  noShadow: PropTypes.bool,
  style: PropTypes.any,
};

TvShowImage.defaultProps = {
};

export default TvShowImage;

