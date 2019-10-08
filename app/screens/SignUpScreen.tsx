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
  TouchableHighlight
} from 'react-native';


const SignUpScreen: React.FC = (props) => {
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
            <View style={styles.ButtonContainer}>
                <TouchableHighlight style={styles.ButtonLeft} onPress={() => console.log('Simple Button pressed')}><Text>LOG IN</Text></TouchableHighlight>
                <TouchableHighlight style={styles.ButtonRight} onPress={() => console.log('Simple Button pressed')}><Text style={{color: "#000"}}>SIGN UP</Text></TouchableHighlight>
            </View>
        </View>
      </View>
    </>
  );
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
      flex: 2
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
ButtonLeft: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    flex: 1
},
ButtonRight: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    // width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    flex: 1
},
ButtonContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30
},

});

export default SignUpScreen;
