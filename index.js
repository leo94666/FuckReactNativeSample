import { Navigation } from 'react-native-navigation'

import { AppRegistry } from 'react-native';

import {SplashScreenRoot} from './src/navigation//index'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(SplashScreenRoot)
})

//AppRegistry.registerComponent("FuckReactNativeSample", () => App);