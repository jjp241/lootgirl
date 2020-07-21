/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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

const App = () => {
  //jeden sposob deklarowania zmiennych:
  const fortune_multiplier = 1.4

  const [cash, setCash] = useState(100);
  const [lastprize, setLastprize] = useState(0);
  const increment = () => {
    setLastprize(Math.floor(Math.random() * fortune_multiplier)*Math.floor(Math.random() * 50))
    setCash(Math.max(0,(cash+lastprize-10)))
  }
  const addMoney = () => {
    setCash(cash+100)
  }

  //drugi sposob deklarowania, chodzi o zadeklarowanie w states
  return (
    <View style = {styles.screen}>
      <Image source={require('./resources/logo.png')} style= {styles.logoImage}/>
      <Text style={styles.bigText}> Credit: {cash}$</Text>
      <View style = {styles.container}>
        <Prize value={lastprize} platform="Steam"/>
      </View>
      <View style = {styles.GUIcontainer}>
        <TouchableOpacity style={styles.mainButton} onPress={increment}>
          <Image source={require('./resources/button.gif')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={addMoney}>
          <Text style={styles.bigText}> Add 100$ </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: '80%',
    height: undefined,
    aspectRatio: 6,
    margin: 10
  },
  mainButton: {
    borderRadius:30,
    height: 300,
    width: 300,
    backgroundColor: '#FFB6E7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  smallButton: {
    margin: 15,
    borderRadius:30,
    height: 90,
    width: 300,
    backgroundColor: '#FFB6E7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e9c2f0',
  },
  GUIcontainer: {
    flex: 2,
    backgroundColor: '#e9c2f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#e9c2f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 25,
    color: 'white',
    textAlign: "center",
    margin: 5,
  }
})


export default App;
