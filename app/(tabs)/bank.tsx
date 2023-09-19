import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Bank = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bank</Text>
    </SafeAreaView>
  );
};

export default Bank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
