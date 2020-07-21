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

const Prize = props => {
  return (
    <View style = {styles.container}>
      <View style={{flexDirection:"row"}}>
          <View style={{flex:0.45}}>
            <Image style = {styles.miniature} source={require('./resources/steam_logo.png')}/>
          </View>
          <View style={{flex:1, justifyContent:'center'}}>
            <Text style = {styles.prizeText}> {props.value}$ {props.platform} code </Text>
          </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius:30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: 'pink'
  },
  prizeText: {
    fontSize: 25,
    color: 'pink',
    textAlign: "center",
    margin: 10,
  },
  miniature: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
})

export default Prize;
