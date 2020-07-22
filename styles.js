import { StyleSheet } from "react-native"

export default StyleSheet.create({
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
