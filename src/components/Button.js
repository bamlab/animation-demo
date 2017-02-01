import React, { PropTypes, Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import appStyle from 'animationDemo/src/appStyle';
import * as Animatable from 'react-native-animatable'; // step 2

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: appStyle.dimensions.touchableHeight * 1.3,
    marginVertical: appStyle.margins.inner,
  },
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: appStyle.dimensions.largeButtonHeight,
    backgroundColor: appStyle.colors.lightText,
    borderRadius: 30,
    overflow: 'hidden', // step 1
  },
  buttonIdle: {
    height: appStyle.dimensions.touchableHeight,
    paddingHorizontal: appStyle.margins.inner,
    minWidth: appStyle.dimensions.largeButtonWidth,
  },
  buttonFetching: {
    width: appStyle.dimensions.largeButtonHeight,
  },
  buttonError: {
    backgroundColor: '#f44336',
    width: appStyle.dimensions.largeButtonHeight,
  },
  buttonSuccess: {
    backgroundColor: '#4caf50',
    width: appStyle.dimensions.largeButtonHeight,
  },
  text: {
    textAlign: 'center',
    color: '#1a237e',
    fontSize: appStyle.font.fontSize.big,
  },
  textWhite: {
    textAlign: 'center',
    color: appStyle.colors.lightText,
    backgroundColor: 'transparent',
  }
});

class Button extends Component {

  status = {
    IDLE: 'idle',
    ERROR: 'error',
    SUCCESS: 'success',
    FETCHING: 'fetching',
  };

  constructor() {
    super();
    this.state = {
      status: this.status.IDLE,
    };
  }

  componentWillReceiveProps(nextProps) {
    let nextStatus = this.status.IDLE;
    if (nextProps.isFetching) {
      nextStatus = this.status.FETCHING;
    }
    if (nextProps.isError) {
      nextStatus = this.status.ERROR;
    }
    if (nextProps.isSuccess) {
      nextStatus = this.status.SUCCESS;
    }

    if (nextStatus === this.state.status) {
      return;
    }
    this.setState({status: nextStatus});

    this.restoreAfterTimer(nextStatus);
    this.launchAnimation(nextStatus); // step 2
  }

  restoreAfterTimer(fromStatus) {
    setTimeout(() => {
      if (fromStatus === this.status.FETCHING || this.state.status !== fromStatus) {
        return;
      }
      this.setState({status: this.status.IDLE});
    }, 3000);
  }

  launchAnimation(status) {
    if (status === this.status.ERROR) {
      this.refs.button.rotate(300);
      setTimeout(() => this.refs.button.shake(400), 400);
    }
    if (status === this.status.SUCCESS) {
      this.refs.button.rotate(300);
    }
  }


  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut(); // step 1
  }

  getContent() {
    switch(this.state.status) {
      case this.status.FETCHING:
        return (
          <ActivityIndicator />
        );

      case this.status.ERROR:
        return (
          <Text style={[styles.text, styles.textWhite]}>!</Text>
        );

      case this.status.SUCCESS:
        return <Icon style={styles.textWhite} name="done" size={appStyle.font.fontSize.huge}/>;

      default:
        return (
          <Text style={styles.text}>{this.props.children.toUpperCase()}</Text>
        );
    }
  }

  getButtonStyle() {
    switch(this.state.status) {
      case this.status.FETCHING:
        return styles.buttonFetching
      case this.status.ERROR:
        return styles.buttonError;
      case this.status.SUCCESS:
        return styles.buttonSuccess
      default:
        return styles.buttonIdle;
    }
  }

  render() {
    const props = this.props;
    const buttonStyle = this.getButtonStyle();

    // step 2 : Animatable.View
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Animatable.View style={[styles.button, buttonStyle, props.style]} ref="button">
          { this.getContent()}
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
  buttonType: PropTypes.string,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  isSuccess: PropTypes.bool,
  style: View.propTypes.style,
};

export default Button;
