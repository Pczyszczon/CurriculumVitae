import React, {Component} from 'react';
import {AppRegistry,Text,View,Image,TextInput,linking} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';

import data from './res/res.js';
import * as styles from './res/styles.js';

class IntroScreen extends React.Component {
  static navigationOptions = {header: null };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Image source={require('./res/BG.png')}
        style={styles.container}>
          <Text style={styles.header}>
            {data.NAME.name}{"\n"}{data.NAME.sname}
          </Text>
          <Text style={styles.currHeader}>
            Curriculum Vitae
          </Text>
          <Button onPress={() => navigate('Main')}
            style={styles.startButton}>
            <Text style={styles.textM}><Icon name="bank" size={25}/> Start</Text>
          </Button>
      </Image>
    );
  }
}

class MainScreen extends React.Component {
  static navigationOptions = {header: null };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Image
       source={require('./res/BG.png')}
       style={styles.MenuContainer}>
      <Button
        onPress={() => navigate('Data')}
        style={styles.menuButtons}>
        <Text style={styles.textM}> <Icon name="id-card" size={25}/> Dane Osobowe </Text>
      </Button>
      <Button
        onPress={() => navigate('Edu')}
        style={styles.menuButtons}>
        <Text style={styles.textM}> <Icon name="mortar-board" size={25}/> Wykształcenie </Text>
      </Button>
      <Button
        onPress={() => navigate('Exp')}
        style={styles.menuButtons}>
        <Text style={styles.textM}> <Icon name="suitcase" size={25}/> Doświadczenie </Text>
      </Button>
      <Button
        onPress={() => navigate('Skills')}
        style={styles.menuButtons}>
        <Text style={styles.textM}> <Icon name="microchip" size={25}/> Umiejętności </Text>
      </Button>
      <Button
        onPress={() => openURL("https://facebook.github.io/react-native/docs/linking.html")}
        style={styles.settingsButton}>
        <Text><Icon name="cogs" size={35}/></Text>
      </Button>
      </Image>
    );
  }
}

class DataScreen extends React.Component{
    static navigationOptions = {title: 'Dane Osobowe'};
    render() {
      return (
        <Image
         source={require('./res/BG.png')}
         style={styles.MenuContainer}>
          <Text style={styles.textH}>
            Telefon
            <Text style={styles.textD}>
              {"\n"}{data.PERSONAL.phone}
            </Text>
          </Text>
          <Text style={styles.textH}>
            Mail
            <Text style={styles.textD}>
              {"\n"}{data.PERSONAL.mail}
            </Text>
          </Text>
          <Text style={styles.textH}>
            Adres
            <Text style={styles.textD}>
              {"\n"}{data.PERSONAL.street}
              {"\n"}{data.PERSONAL.city}
            </Text>
          </Text>
        </Image>
      );
    }
  }

class SkillsScreen extends React.Component{
    static navigationOptions = {title: 'Umiejętności'};
    render() {
      return (
        <View>
          <Text style={{fontWeight: 'normal'}}>
            Znajomość
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.SKILLS.know}
            </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            Podstawowa Znajomość
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.SKILLS.basic}
            </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            Podstawowa Wiedza z Zakresu
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.SKILLS.rlybasic}
            </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            Pozostałe
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.SKILLS.rest}
            </Text>
          </Text>
        </View>
      );
    }
  }

class ExperienceScreen extends React.Component{
    static navigationOptions = {title: 'Doświadczenie'};
    render() {
      return (
        <View>
          <Text style={{fontWeight: 'normal'}}>
            {data.EXPERIENCE.wda1}
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.EXPERIENCE.w1}
            </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            {data.EXPERIENCE.wda2}
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.EXPERIENCE.w2}
            </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            {data.EXPERIENCE.wda3}
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.EXPERIENCE.w3}
            </Text>
          </Text>
        </View>
      );
    }
  }

class EducationScreen extends React.Component{
    static navigationOptions = {title: 'Wykształcenie'};
    render() {
      return (
        <View>
          <Text style={{fontWeight: 'normal'}}>
            {data.EDUCATION.highDate}
              <Text style={{fontWeight: 'bold'}}>
                {"\n"}{data.EDUCATION.high}
              </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            {data.EDUCATION.uniDate}
              <Text style={{fontWeight: 'bold'}}>
                {"\n"}{data.EDUCATION.uni}{"\n"}
                {data.EDUCATION.dep}{"\n"}
                {data.EDUCATION.field}
              </Text>
          </Text>
        </View>
      );
    }
  }

class SettingsScreen extends React.Component{
  static navigationOptions = {title: 'Ustawienia'};
  render() {
    return (
      <View>
        <Text> adagaga </Text>
      </View>
    );
  }
}

const CV = StackNavigator({
  Intro: {screen: IntroScreen},
  Main: {screen: MainScreen},
  Skills: {screen: SkillsScreen},
  Data: {screen: DataScreen},
  Edu: {screen: EducationScreen},
  Exp: {screen: ExperienceScreen},
  Sett: {screen: SettingsScreen},
});

AppRegistry.registerComponent('CV', () => CV);
