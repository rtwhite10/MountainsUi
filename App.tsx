import LoginScreen from './app/screens/LoginScreen'
import SignUpScreen from './app/screens/SignUpScreen'
import HomeScreen from './app/screens/Mountains'
import MapScreen from './app/screens/MapScreen'

import { createAppContainer,  createSwitchNavigator } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


const AuthStack = createStackNavigator(
  {
    // home: {
    //   screen: LoginScreen,
    // },
    home: {
      screen: LoginScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    }
  },
  {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
    }
  }
)

const AppStack = createStackNavigator(
  {
  HomeScreen: {
    screen: HomeScreen
  },
  MapScreen: {
    screen: MapScreen
  }, 
  },
  {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
    }
  }
)



export default createAppContainer(createSwitchNavigator(
{
  App: AppStack,
  Auth: AuthStack,

  
  
 
  
  
}

));