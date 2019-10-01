/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {primaryColor} from './app/modules/styles'
import LogoArea from './app/components/LogoArea'
import LoginArea from './app/components/LoginArea'

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

const App: React.FC = () => {
  return (
    <>
      <View style={styles.layoutArea}>
        <LogoArea />
        <LoginArea />
        <View style={styles.image}>
          <Image source={require('./app/assets/images/mountains.png')}/>
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
  }
});

export default App;
