import {primaryColor, secondaryColor} from '../modules/styles'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import LogoArea from '../components/LogoArea'
// import LoginArea from '../components/LoginArea'
import Geolocation from 'react-native-geolocation-service';

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   TextInput,
//   TouchableHighlight,
//   TouchableOpacity
// } from 'react-native';


//     const [location, setLocation] = useState({})

//     Geolocation.getCurrentPosition(
//         position => {
//           const location = JSON.stringify(position);
      
//           setLocation({location});
//         },
//         error => console.log(error.message),
//         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//       );
    

//     return (
//         <>
//           <View style={styles.Container}>
//               <Text>Mountains</Text>
//               <Text>{location}</Text>
//           </View>
//         </>
//       );
// }
    

// const styles = StyleSheet.create({
//     Container: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: `${secondaryColor}`
        
//     }
// });


// export default Mountains;

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

export default class Mountains extends Component {
  state = {
    location: null
  };

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        backgroundColor: `${secondaryColor}`,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
});