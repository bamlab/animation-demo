import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Page, Button } from 'animationDemo/src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ButtonPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      successButton: {
        isFetching: false,
        isSuccess: false,
      },
      errorButton: {
        isFetching: false,
        isError: false,
      }
    };
  }

  pressSuccess() {
    this.setState({
      successButton: {
        isFetching: true,
        isSuccess: false,
      },
      errorButton: {
        isFetching: false,
        isError: false,
      }
    });
    setTimeout(() => {
      this.setState({
        successButton: {
          isFetching: false,
          isSuccess: true,
        },
      });
    }, 500);
  }

  pressError() {
    this.setState({
      errorButton: {
        isFetching: true,
        isError: false,
      },
      successButton: {
        isFetching: false,
        isSuccess: false,
      },
    });
    setTimeout(() => {
      this.setState({
        errorButton: {
          isFetching: false,
          isError: true,
        },
      });
    }, 500);
  }

  render() {
    console.log(this.state);
    return (
      <Page backgroundColor="#37474f">
        <View style={styles.container}>
          <Button onPress={() => this.pressSuccess()} {...this.state.successButton}>Button</Button>
          <Button onPress={() => this.pressError()} {...this.state.errorButton}>Button</Button>
        </View>
      </Page>
    );
  }
}

export default ButtonPage;
