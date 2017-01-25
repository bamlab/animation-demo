import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Dimensions
} from 'react-native';
import appStyle from 'animationDemo/src/appStyle';
import * as Animatable from 'react-native-animatable';

import Title from './Title';
import TvShowImage from './Image';
import NextEpisode from './NextEpisode';

const height = Dimensions.get('window').height - appStyle.navbar.height;

const selectOpened = (opened, style) => opened ? style.opened : style.closed;

const getStyles = (opened, left) => StyleSheet.create({
  container: selectOpened(opened, {
    opened: {
      height,
      width: Dimensions.get('window').width,
      position: 'relative',
      zIndex: 1,
    },
    closed: {
      flex: 1,
      alignItems: 'stretch',
      height: 250,
      justifyContent: 'center',
    },
  }),
  title: selectOpened(opened, {
    opened: {
      height: Dimensions.get('window').width / 2,
      flexDirection: 'row',
    },
    closed: {
      position: 'absolute',
      top: 25,

      zIndex: 2,
      height: 200,
      width: 200,
      left: left ? 5 : undefined,
      right: left ? undefined : 5
    }
  }),
  image: selectOpened(opened, {
    opened: {
      flex: 1
    },
    closed: {
      flex: 0,
      height: 170,
      zIndex: 1,
    },
  }),
  description: selectOpened(opened, {
    opened: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      opacity: 0,
    },
    closed: {
      position: 'absolute',
      opacity: 0,
    },
  }),
  descriptionText: {
    color: appStyle.colors.lightText,
    textAlign: 'center',
    maxHeight: height / 3,
  },
  animatableNextEpisode: selectOpened(opened, {
    opened: {
      flex: 1,
      zIndex: 1,
    },
    closed: {
      position: 'absolute',
      opacity: 0,
      right: 0,
      bottom: 0,
      top: 0
    }
  }),
});

const colors = [
  '#7e57c2',
  '#03a9f4',
  '#f44336',
  '#009688',
  '#e91e63',
  '#4caf50',
  '#ff9800',
  '#795548',
  '#607d8b',
  '#9c27b0',
  '#00bcd4',
  '#ffc107',
];

class TvShowListItem extends Component {

  constructor(props) {
    super(props);
    this.state = { opened: false };

    this.onPress = this.onPress.bind(this);
  }

  componentWillUpdate() {
    const animation = LayoutAnimation.create(500, 'easeInEaseOut', 'opacity');
    LayoutAnimation.configureNext(animation);
  }

  onPress() {
    this.props.onPress();
    if (this.props.noAnimation) {
      return;
    }

    if (this.state.opened) {
      this.refs.nextEpisode.fadeOutLeft();
      this.refs.description.fadeOutDownBig();
      return  this.setState({opened: false, windowPos: null});
    }
    this.refs.container.measureInWindow((x, y) => {
      this.refs.nextEpisode.slideInLeft();
      setTimeout(() => this.refs.description.fadeInUpBig(), 400);
      this.setState({
        opened: true,
        windowPos: { x, y },
      });
    });
  }


  render() {
    const props = this.props;
    const { opened } = this.state;
    const styles = getStyles(opened, (props.index % 2 === 0));

    const containerPos = this.state.windowPos ? {
      top: - this.state.windowPos.y + appStyle.navbar.height,
    } : {};

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[styles.container, containerPos]} ref="container" >
          <TvShowImage tvShow={props.tvShow} style={styles.image} noShadow={opened}/>
          <View style={styles.title}>
            <Title
              tvShow={props.tvShow}
              color={colors[(props.index % colors.length)]}
              onPress={this.onPress}
              noShadow={opened}
            />
            <Animatable.View
              style={styles.animatableNextEpisode}
              duration={800}
              ref="nextEpisode"
            >
              <NextEpisode tvShow={this.props.tvShow}/>
            </Animatable.View>
          </View>
          <Animatable.View
            style={styles.description}
            duration={800}
            ref="description"
            delay={400}
          >
            <Text style={styles.descriptionText}>{this.props.tvShow.overview}</Text>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

TvShowListItem.propTypes = {
  tvShow: PropTypes.object.isRequired,
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onPress: PropTypes.func,
  opened: PropTypes.bool,
  noAnimation: PropTypes.bool,
};

TvShowListItem.defaultProps = {
  index: 0,
  onPress: () => {}
};

export default TvShowListItem;

