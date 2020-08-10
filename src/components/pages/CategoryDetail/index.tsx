import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LOG_INPUT } from "../../../constants/path";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function CategoryDetail() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>CategoryDetail</Text>
      <TouchableOpacity onPress={() => navigate(LOG_INPUT)}>
        <Text>LogInput</Text>
      </TouchableOpacity>
    </View>
  );
}
