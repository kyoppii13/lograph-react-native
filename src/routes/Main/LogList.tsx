import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LOG_LIST, LOG_DETAIL } from "../../constants/path";
import { LogList, LogDetail } from "../../components/pages";
import { HeaderLeft } from "../Header";

const Stack = createStackNavigator();

function LogListNavigator() {
  return (
    <Stack.Navigator initialRouteName={LOG_LIST}>
      <Stack.Screen
        name={LOG_LIST}
        component={LogList}
        options={{ headerLeft: () => <HeaderLeft /> }}
      />
      <Stack.Screen name={LOG_DETAIL} component={LogDetail} />
    </Stack.Navigator>
  );
}

export default LogListNavigator;
