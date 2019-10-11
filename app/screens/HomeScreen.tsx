import {primaryColor, secondaryColor} from '../modules/styles'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import OverlayComponent from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoArea from '../components/LogoArea'
import LoginArea from '../components/LoginArea'

import React, {useState} from 'react';
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

const HomeScreen = () => {
  const [regionData, setRegionData] = useState({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })

  return(
    <>
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={regionData.region}
                // onRegionChange={this.onRegionChange}
                >
            </MapView>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    layoutArea: {
      height: '100%',
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    //   backgroundColor:`${primaryColor}`
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
})
export default HomeScreen

// API KEY MAPS AIzaSyDIJ_1vB3dLMMGbPMlPUpatvdkIzU09QKQ