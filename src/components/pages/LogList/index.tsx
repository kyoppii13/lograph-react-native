import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LOG_DETAIL, LOG_INPUT } from "../../../constants/path";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function LogList() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>LogList</Text>
      <TouchableOpacity onPress={() => navigate(LOG_DETAIL)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(LOG_INPUT)}>
        <Text>Go to Input</Text>
      </TouchableOpacity>
    </View>
  );
}
