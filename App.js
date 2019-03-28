/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,SafeAreaView} from 'react-native';
import {Todo} from "./src/app/Todo";
import {Fancy} from "./src/app/Fancy";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
      super()
      this.state = {
          todos: ['REACT NATIVE', 'Javascript', 'React']
,
          newTodo:''
      }

  }

    handleChange(e){
    const {value}=e.target;
    this.setState({newTodo:value})
    }

  render() {
    return (

<SafeAreaView>
<Todo/>
</SafeAreaView>

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
