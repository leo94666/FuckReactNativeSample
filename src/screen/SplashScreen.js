import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import AppNavigator from "./app/navigation/AppNavigator";

const Stack = createNativeStackNavigator();

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to MainScreen"
        onPress={() => {
          navigation.push("SplashScreen")
          navigation.navigate("MainScreen");
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
