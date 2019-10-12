import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import React, {useState, useEffect} from 'react';
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

const Maps = () => {
    const [regionData, setRegionData] = useState({
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })

    const testing = () => {
      console.log('test')
    }

    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                setRegionData({region: {
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }})
            }
        ),
        (error: any) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        return () => {
            console.log("clean up")
        };
    }, [testing])

   
  
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
              <View style={styles.layoutArea}>
                <Text>
                  {regionData.region.latitude}
                </Text>
                <Text>
                  {regionData.region.longitude}
                </Text>
                <TouchableOpacity onPress={() => testing}><Text>Already signed up?</Text></TouchableOpacity>
              </View>  
          </View>
      </>
    )
  }
  
  const styles = StyleSheet.create({
      layoutArea: {
        marginBottom: 50,
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
  export default Maps