/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import shareHelper from './shareHelper';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true, loaded: false, url: '' };
    shareHelper.getData(this.props || {})
      .then((url) => {
        this.setState({ url, loaded: true });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loaded: true });
      })
  }
  componentDidMount() {

  }
  render() {
    console.log(this.props);
    if (!this.state.loaded) {
      return (<Text>Loading</Text>);
    }
    if (!this.state.url) {
      return (
        <View>
        <Text>An error occured</Text>
      <Button title="Close" onPress={() => {
        shareHelper.close();
      }}>
    <Text>Close</Text>
      </Button>
      </View>
    );
    }
    return (
      <View style={styles.container}>
  <Text style={styles.welcome}>Welcome on extension</Text>
    <Text>{JSON.stringify(this.props)}</Text>
    <Text>{JSON.stringify(this.state.url)}</Text>
    <Button title="Close" onPress={() => {
      shareHelper.close();
    }}>
  <Text>Close</Text>
    </Button>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
