import React, {Component} from 'react';
import {AppRegistry,Text,View,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome';

import data from './res/res.js';
import * as styles from './res/styles.js';

class IntroScreen extends React.Component {
  static navigationOptions = {header: null };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <Button
        onPress={() => navigate('Main')}
        style={styles.startButton}
        textStyle={{fontSize: 20}}>
          <Text> <Icon name="bank"/> Start </Text>
        </Button>
    );
  }
}

class MainScreen extends React.Component {
  static navigationOptions = {header: null };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainButtons}>
      <Button
        onPress={() => navigate('Data')}>
        <Text> <Icon name="id-card"/> Dane Osobowe </Text>
      </Button>
      <Button
        onPress={() => navigate('Edu')}>
        <Text> <Icon name="mortar-board"/> Wykształcenie </Text>
      </Button>
      <Button
        onPress={() => navigate('Exp')}>
        <Text> <Icon name="suitcase"/> Doświadczenie </Text>
      </Button>
      <Button
        onPress={() => navigate('Skills')}>
        <Text> <Icon name="microchip"/> Umiejętności </Text>
      </Button>
      </View>
    );
  }
}

class DataScreen extends React.Component{
    static navigationOptions = {title: 'Dane Osobowe'};
    render() {
      return (
        <View>
          <Text style={{fontWeight: 'normal'}}>
            Telefon
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.PERSONAL.phone}
            </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            Mail
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.PERSONAL.mail}
            </Text>
          </Text>
          <Text style={{fontWeight: 'normal'}}>
            Adres
            <Text style={{fontWeight: 'bold'}}>
              {"\n"}{data.PERSONAL.street}
              {"\n"}{data.PERSONAL.city}
            </Text>
          </Text>
        </View>
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
