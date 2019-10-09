/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {primaryColor, secondaryColor} from '../modules/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoArea from '../components/LogoArea'
import LoginArea from '../components/LoginArea'

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

class LoginScreen extends React.Component<{navigation: any}> {
  render() {
    return (
      <>
        <View style={styles.layoutArea}>
          <LogoArea />
          <>
            <View style={styles.InputContainer}>
              <View style={styles.TextFieldContainer}>
                  <Icon name="user" size={30} color="#9DF0FF" />
                  <TextInput style={styles.InputFields} placeholder="Email"/>
              </View>
              <View style={styles.TextFieldContainer}>
                  <Icon name="key" size={24} color='#9DF0FF'/>
                  <TextInput style={styles.InputFields} placeholder="Password"/>
              </View>
              <TouchableHighlight><Text style={styles.Text}>Forgot password?</Text></TouchableHighlight>
              <View style={styles.ButtonContainer}>
                  <TouchableOpacity style={styles.ButtonLeft} onPress={() => this.props.navigation.navigate('HomeScreen')}><Text>SIGN IN</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.ButtonRight} onPress={() => this.props.navigation.navigate('SignUp')}><Text style={{color: "#fff"}}>SIGN UP</Text></TouchableOpacity>
              </View>
          </View>
        </>
          <View style={styles.image}>
            <Image source={require('../assets/images/mountains.png')}/>
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:`${primaryColor}`
  },
  image: {
   flex: 1
  },
InputContainer: {
  flex: 3
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
Text: {
  color: `${secondaryColor}`,
  fontSize: 16,
  fontFamily: "Amatic-Bold",
  marginTop: 10,
  marginBottom: 10,
  letterSpacing: 1
},
ButtonContainer: {
  display: 'flex',
  flexDirection: "row",
  alignItems: "center",
  marginTop: 30

},
ButtonLeft: {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  width: 150,
  height: 50,
  borderRadius: 25,
  backgroundColor: "#fff",
  flex: 2
},
ButtonRight: {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  flex: 1
}
});

export default LoginScreen;
