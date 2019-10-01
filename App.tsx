/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {primaryColor} from './app/modules/styles'
import LogoArea from './app/components/LogoArea'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:`${primaryColor}`
  }
});

export default App;
