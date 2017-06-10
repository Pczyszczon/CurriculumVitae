import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  MenuContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    flexDirection: 'column',
  },
  header: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'sans-serif-thin',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 400,
  },
  currHeader: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'sans-serif-thin',
  },
  startButton: {
    margin: 15,
    backgroundColor: 'white',
  },
  menuButtons: {
    backgroundColor: 'white',
    marginBottom: 30,
    marginTop: 20,
    margin: 15,
  },
  textM: {
    fontSize: 20,
    fontFamily: 'sans-serif-thin',
    fontWeight: 'bold',
  },
  textH: {
    color: 'white',
    fontFamily: 'sans-serif-thin',
    fontWeight: 'normal',
    fontSize: 16,
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 400,
  },
  textD: {
    fontWeight: 'bold',
  },
  DataContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: '#2f4f4f',
  },
  settingsButton:{
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius:30
  },
  GitButton: {
    backgroundColor: 'white',
    marginBottom: 30,
    marginTop: 20,
    margin: 15,
    borderRadius:70,
    width: 70,
    height: 70,
    position: 'absolute',
    right: 140,
    bottom: 100,
  },
});

module.exports = styles;
