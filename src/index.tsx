import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function Log() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
}

function Category() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Log" component={Log} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
