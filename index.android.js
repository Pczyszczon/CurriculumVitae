import React, {Component,PropTypes} from 'react';
import {AppRegistry,Text,View,Image,TextInput,
        WebView,Linking} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';
import PopupDialog ,{SlideAnimation} from 'react-native-popup-dialog';
import Egg from 'react-native-egg';

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
        <Egg
          setps={'TTT'}
          onCatch={() => {this.popupDialog.show();}}>
            <Text style={styles.currHeader}>
              Curriculum Vitae
            </Text>
          </Egg>
          <PopupDialog
            height={100}
            dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
            <View>
              <Text style={styles.cv}>{data.KLAUZURA.cv}</Text>
            </View>
          </PopupDialog>
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
        onPress={() => Communications.web(data.GITHUB.url)}
        style={styles.menuButtons}>
        <Text style={styles.textM}> <Icon name="github" size={25}/> Github</Text>
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
         <Egg
           setps={'TTT'}
           onCatch={() => {this.popupDialog.show();}}>
          <Text style={styles.textH}>
            Telefon
            <Text style={styles.textD}>
              {"\n"}{data.PERSONAL.phone}
            </Text>
          </Text>
          </Egg>
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
        <Image
         source={require('./res/BG.png')}
         style={styles.MenuContainer}>
          <Text style={styles.textH}>
            Znajomość
            <Text style={styles.textD}>
              {"\n"}{data.SKILLS.know}
            </Text>
          </Text>
          <Text style={styles.textH}>
            Podstawowa Znajomość
            <Text style={styles.textD}>
              {"\n"}{data.SKILLS.basic}
            </Text>
          </Text>
          <Text style={styles.textH}>
            Podstawowa Wiedza z Zakresu
            <Text style={styles.textD}>
              {"\n"}{data.SKILLS.rlybasic}
            </Text>
          </Text>
          <Text style={styles.textH}>
            Pozostałe
            <Text style={styles.textD}>
              {"\n"}{data.SKILLS.rest}
            </Text>
          </Text>
        </Image>
      );
    }
  }

class ExperienceScreen extends React.Component{
    static navigationOptions = {title: 'Doświadczenie'};
    render() {
      return (
        <Image
         source={require('./res/BG.png')}
         style={styles.MenuContainer}>
          <Text style={styles.textH}>
            {data.EXPERIENCE.wda1}
            <Text style={styles.textD}>
              {"\n"}{data.EXPERIENCE.w1}
            </Text>
          </Text>
          <Text style={styles.textH}>
            {data.EXPERIENCE.wda2}
            <Text style={styles.textD}>
              {"\n"}{data.EXPERIENCE.w2}
            </Text>
          </Text>
          <Text style={styles.textH}>
            {data.EXPERIENCE.wda3}
            <Text style={styles.textD}>
              {"\n"}{data.EXPERIENCE.w3}
            </Text>
          </Text>
        </Image>
      );
    }
  }

class EducationScreen extends React.Component{
    static navigationOptions = {title: 'Wykształcenie'};
    render() {
      return (
        <Image
         source={require('./res/BG.png')}
         style={styles.MenuContainer}>
          <Text  style={styles.textH}>
            {data.EDUCATION.highDate}
              <Text style={styles.textD}>
                {"\n"}{data.EDUCATION.high}
              </Text>
          </Text>
          <Text  style={styles.textH}>
            {data.EDUCATION.uniDate}
              <Text style={styles.textD}>
                {"\n"}{data.EDUCATION.uni}{"\n"}
                {data.EDUCATION.dep}{"\n"}
                {data.EDUCATION.field}
              </Text>
          </Text>
        </Image>
      );
    }
  }

const CurriculumVitae = StackNavigator({
  Intro: {screen: IntroScreen},
  Main: {screen: MainScreen},
  Skills: {screen: SkillsScreen},
  Data: {screen: DataScreen},
  Edu: {screen: EducationScreen},
  Exp: {screen: ExperienceScreen},
});

AppRegistry.registerComponent('CurriculumVitae', () => CurriculumVitae);
