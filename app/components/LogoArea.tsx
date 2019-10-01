/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {secondaryColor} from '../modules/styles'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const LogoArea: React.FC = () => {
  return (
    <>
      <View>
        <Text style={styles.logoContainer}>Cloudy</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
      color: `${secondaryColor}`,
      fontSize: 36

  }
});

export default LogoArea;
