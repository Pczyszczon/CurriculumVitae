import React, {Component} from 'react';
import {AppRegistry,Text,Button,View} from 'react-native';
import {StackNavigator} from 'react-navigation';

class IntroScreen extends React.Component {
  static navigationOptions = {header: null };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Main')}
          title="Press To Start"
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
      <View>
      <Button
        onPress={() => navigate('Data')}
        title="Personal Data"
      />
      <Button
        onPress={() => navigate('Skills')}
        title="Skills"
      />
      <Button
        onPress={() => navigate('Exp')}
        title="Working Experience"
      />
      </View>
    );
  }
}

class DataScreen extends React.Component {
  static navigationOptions = {title: 'Personal Data'};
  render() {
    return (
      <View>
        <Text>There should be some data</Text>
      </View>
    );
  }
}

class SkillsScreen extends React.Component {
  static navigationOptions = {title: 'Skills'};
  render() {
    return (
      <View>
        <Text>There should be some skills</Text>
      </View>
    );
  }
}

class ExperienceScreen extends React.Component {
  static navigationOptions = {title: 'Working Experience'};
  render() {
    return (
      <View>
        <Text>There should be some work info</Text>
      </View>
    );
  }
}


const CV = StackNavigator({
  Intro: {screen: IntroScreen},
  Main: {screen: MainScreen},
  Skills: {screen: SkillsScreen},
  Data: {screen: DataScreen},
  Exp: {screen: ExperienceScreen},
});

AppRegistry.registerComponent('CV', () => CV);
