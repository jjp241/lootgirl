/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import styles from './styles.js'

import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Prize from './Prize'

const fortune_multiplier = 1.4;

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {fortune_multiplier:1.4,cash:100,lastprize:0};
  }

  addMoney = () => {
    this.setState({cash:this.state.cash+100})
  }

  increment = () => {
    this.setState({lastprize:Math.floor(Math.random() * fortune_multiplier)*Math.floor(Math.random() * 50)})
    this.setState({cash:Math.max(0,(this.state.cash+this.state.lastprize-10))})
  }

  render(){
    return (
      <View style = {styles.screen}>
        <Image source={require('./resources/logo.png')} style= {styles.logoImage}/>
        <Text style={styles.bigText}> Credit: {this.state.cash}$</Text>
        <View style = {styles.container}>
          <Prize value={this.state.lastprize} platform="Steam"/>
        </View>
        <View style = {styles.GUIcontainer}>
          <TouchableOpacity style={styles.mainButton} onPress={this.increment}>
            <Image source={require('./resources/button.gif')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={this.addMoney}>
            <Text style={styles.bigText}> Add 100$ </Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  };
}


export default App;
