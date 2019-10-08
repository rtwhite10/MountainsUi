/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {secondaryColor} from '../modules/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
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
  Button,
  TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationStackProp} from 'react-navigation-stack'

type Props = {
  navigation: NavigationStackProp< string >;
};


const LoginArea: React.FC <Props> = ( props ) => {
  
  return (
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
            <TouchableHighlight style={styles.ButtonLeft} onPress={() => console.log('Simple Button pressed')}><Text>SIGN IN</Text></TouchableHighlight>
            <TouchableHighlight style={styles.ButtonRight} onPress={() => props.navigation.navigate('SignUpRoute')}><Text style={{color: "#fff"}}>SIGN UP</Text></TouchableHighlight>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    InputContainer: {
        flex: 2
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
        flex: 1
    },
    ButtonRight: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});

export default LoginArea;
