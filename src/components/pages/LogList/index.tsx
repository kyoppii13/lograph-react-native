import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function LogList() {
  return (
    <View style={styles.container}>
      <Text>LogList</Text>
    </View>
  );
}
