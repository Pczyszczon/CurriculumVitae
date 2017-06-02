import React, {Component} from 'react';
import {AppRegistry,Text,View,StyleSheet,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <Button onPress={() => navigate('Data')}>
        <Text> <Icon name="id-card"/> Dane Osobowe </Text>
      </Button>
      <Button onPress={() => navigate('Edu')}>
        <Text> <Icon name="mortar-board"/> Wykształcenie </Text>
      </Button>
      <Button onPress={() => navigate('Exp')}>
        <Text> <Icon name="suitcase"/> Doświadczenie </Text>
      </Button>
      <Button onPress={() => navigate('Skills')}>
        <Text> <Icon name="microchip"/> Umiejętności </Text>
      </Button>
      </View>
    );
  }
}

class DataScreen extends React.Component {
  static navigationOptions = {title: 'Dane Osobowe'};
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'normal'}}>
          Telefon<Text style={{fontWeight: 'bold'}}>{"\n"}796533378</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          Mail<Text style={{fontWeight: 'bold'}}>{"\n"}pawel.czyszczon997@gmail.com</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          Adres<Text style={{fontWeight: 'bold'}}>{"\n"}Tadeusza Kościuszki 198/26{"\n"}50-437 Wrocław</Text>
        </Text>
      </View>
    );
  }
}

class SkillsScreen extends React.Component {
  static navigationOptions = {title: 'Umiejętności'};
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'normal'}}>
          Znajomość<Text style={{fontWeight: 'bold'}}>{"\n"}Python, C z elementami C++</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          Podstawowa Znajomość<Text style={{fontWeight: 'bold'}}>{"\n"}HTML5, JavaScript, jQuery, CSS, SFML, React-Native</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          Podstawowa Wiedza z Zakresu<Text style={{fontWeight: 'bold'}}>{"\n"}Scrum, git VC</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          Pozostałe<Text style={{fontWeight: 'bold'}}>{"\n"}Angielski B2</Text>
        </Text>
      </View>
    );
  }
}

class ExperienceScreen extends React.Component {
  static navigationOptions = {title: 'Doświadczenie'};
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'normal'}}>
          2014 <Text style={{fontWeight: 'bold'}}>{"\n"}Członek Komisji Wyborczej</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          2015<Text style={{fontWeight: 'bold'}}>{"\n"}Korepetytor z Matematyki</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          2015 <Text style={{fontWeight: 'bold'}}>{"\n"}Wakacyjna Praca w Księgarnii</Text>
        </Text>
      </View>
    );
  }
}

class EducationScreen extends React.Component {
  static navigationOptions = {title: 'Wykształcenie'};
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'normal'}}>
          2012-2015 <Text style={{fontWeight: 'bold'}}>{"\n"}Liceum Ogólnokształcące nr 1 w Legnicy</Text>
        </Text>
        <Text style={{fontWeight: 'normal'}}>
          2016-teraz <Text style={{fontWeight: 'bold'}}>{"\n"}Uniwersytet Wrocławski{"\n"}Wydział Fizyki i Astronomii{"\n"}Informatyka Stosowana i Systemy Pomiarowe</Text>
        </Text>
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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  startButton: {
    margin: 15,
  },
  mainButtons: {
    margin: 15,
  },
});

AppRegistry.registerComponent('CV', () => CV);
