import { StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
    </SafeAreaView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
