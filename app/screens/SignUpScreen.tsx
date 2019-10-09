/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {primaryColor, secondaryColor} from '../modules/styles'
import LogoArea from '../components/LogoArea'
import LoginArea from '../components/LoginArea'
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation, NavigationAction } from 'react-navigation';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';


class SignUpScreen extends React.Component <{navigation: any}> {
 
  render() {
    const {navigate, push} = this.props.navigation;
    return (
      <>
        <View style={styles.layoutArea}>
            <LogoArea />
            <View style={styles.loginContainer}>
              <View style={styles.TextFieldContainer}>
                  <Icon name="user" size={30} color="#9DF0FF" />
                  <TextInput style={styles.InputFields} placeholder="Email"/>
              </View>
              <View style={styles.TextFieldContainer}>
                  <Icon name="key" size={24} color="#9DF0FF" />
                  <TextInput style={styles.InputFields} placeholder="Password"/>
              </View>
              <View style={styles.TextFieldContainer}>
                  <Icon name="key" size={24} color="#9DF0FF" />
                  <TextInput style={styles.InputFields} placeholder="Password"/>
              </View>
              <View>
                <View style={styles.ButtonContainer}>
                  <TouchableOpacity style={styles.ButtonLeft} onPress={() => console.log('Simple Button pressed')}><Text>LOG IN</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.ButtonRight} onPress={() => navigate('LoginScreen')}><Text style={{color: "#000"}}>SIGN UP</Text></TouchableOpacity>
                </View>
                <View style={styles.TextContainer}>
                  <TouchableOpacity onPress={() => push('home')}><Text style={styles.text}>Already signed up?</Text></TouchableOpacity>
                </View>
              </View>
              
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  layoutArea: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:`${primaryColor}`
  },
  loginContainer: {
      flex: 4
  },
  image: {
   flex: 1
  },
  InputFields: {
    width: 250,
    height: 40,
    paddingLeft: 20
    
  },
  TextFieldContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: `${secondaryColor}`,
    marginTop: 25
  },
  TextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  text: {
    color: `${secondaryColor}`
  },

  ButtonContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30
  },
  ButtonLeft: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      flex: 1,

  },
  ButtonRight: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      // width: 100,
      height: 50,
      borderRadius: 25,
      backgroundColor: "#fff",
      flex: 2
  },
  });

export default withNavigation(SignUpScreen);
