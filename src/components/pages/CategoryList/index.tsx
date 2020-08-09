import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CATEGORY_DETAIL } from "../../../constants/path";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function CategoryList() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>CategoryList</Text>
      <TouchableOpacity onPress={() => navigate(CATEGORY_DETAIL)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
