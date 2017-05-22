import React, {Component} from 'react';
import {AppRegistry,Text,Button,View,StyleSheet,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

class IntroScreen extends React.Component {
  static navigationOptions = {header: null };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.main}>
        <Button
          onPress={() => navigate('Main')}
          title="Naciśnij by rozpocząć"
        />
      </View>
    );
  }
}

class MainScreen extends React.Component {
  static navigationOptions = {header: null };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.main}>
      <Button
        onPress={() => navigate('Data')}
        title="Dane Osobowe"
      />
      <Button
        onPress={() => navigate('Edu')}
        title="Wykształcenie"
      />
      <Button
        onPress={() => navigate('Exp')}
        title="Doświadczenie"
      />
      <Button
        onPress={() => navigate('Skills')}
        title="Umiejętności"
      />
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

const curriculum = StackNavigator({
  Intro: {screen: IntroScreen},
  Main: {screen: MainScreen},
  Skills: {screen: SkillsScreen},
  Data: {screen: DataScreen},
  Edu: {screen: EducationScreen},
  Exp: {screen: ExperienceScreen},
});

const styles = StyleSheet.create({

  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

AppRegistry.registerComponent('curriculum', () => curriculum);
