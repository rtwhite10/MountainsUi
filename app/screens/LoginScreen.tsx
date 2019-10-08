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

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
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

const LoginScreen: React.FC = () => {
    
  return (
    <>
      <View style={styles.layoutArea}>
        <LogoArea />
        <LoginArea />
        <View style={styles.image}>
          <Image source={require('../assets/images/mountains.png')}/>
        </View>
      </View>
    </>
  );
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
  TextFieldContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: `${secondaryColor}`,
    marginTop: 25
},
});

export default LoginScreen;
