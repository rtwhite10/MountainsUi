import LoginScreen from './app/screens/LoginScreen'
import SignUpScreen from './app/screens/SignUpScreen'

import { createAppContainer,  createSwitchNavigator } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

// const AppStack = createStackNavigator(
//   {
//     Home: HomeScreen
//   }
// )

const AuthStack = createStackNavigator(
  {
    
    SignUpRoute: SignUpScreen,
    LoginRoute: LoginScreen,
  }
)



export default createAppContainer(createSwitchNavigator(
{
  Auth: AuthStack
}
));