/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, NativeModules, Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { result: {} };
    NativeModules.ActionExtension.getData()
      .then((result) => {
        this.setState({ result });
      })
      .catch((e) => {
        this.setState({ result: { error: e.message }});
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome on extension</Text>
          <Text>{JSON.stringify(this.props)}</Text>
          <Text>{JSON.stringify(this.state.result)}</Text>
          <Button title="Close" onPress={() => {
            console.log(NativeModules.ActionExtension);
            NativeModules.ActionExtension.done();
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
