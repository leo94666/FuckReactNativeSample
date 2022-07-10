import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screen/SplashScreen";
import MainScreen from "./src/screen/MainScreen";
import ReactNativeScreen from "./src/screen/ReactNativeScreen";
import { TestScreen } from "./src/screen/TestScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  //JSX语法
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
