import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function LogInput() {
  return (
    <View style={styles.container}>
      <Text>LogInput</Text>
    </View>
  );
}
