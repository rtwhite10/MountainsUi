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
      <View style={styles.logoContainer}>
        <View style={styles.icon}>
        <Icon name="cloud" size={80} color="#900" />
        </View>
        <Text style={styles.text}>Mountains</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
      marginTop: 50,
      display: "flex",
      alignItems: "center"
  },
  text: {
      color: `${secondaryColor}`,
      fontSize: 36,
      fontFamily: "Amatic-Bold",
      letterSpacing: 10
  },
  icon: {
    marginRight: 2
  }
});

export default LogoArea;
