//路由

import { Navigation } from 'react-native-navigation'

import SplashScreen from '../screen/SplashScreen'
import MainScreen from '../screen/MainScreen'
import ReactNativeScreen from '../screen/ReactNativeScreen'


//注册所有

Navigation.registerComponent('SplashScreen', () => SplashScreen)

Navigation.registerComponent('MainScreen', () => MainScreen)


//配置RN中的导航

//1.欢迎界面的导航
export const SplashScreenRoot = {
    root: {
        stack: {
            children: [
                {
                    components: {
                        name: 'SplashScreen'
                    }
                }
            ]
        }
    }
}



//2.主屏幕的导航
export const MainScreenRoot = {
    root: {
        stack: {
            children: [
                {
                    components: {
                        name: 'MainScreen'
                    }
                }
            ]
        }
    }
}

//2.登录的导航



