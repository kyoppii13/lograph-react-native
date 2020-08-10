import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LOG_LIST, LOG_DETAIL, LOG_INPUT } from "../../constants/path";
import { LogList, LogDetail, LogInput } from "../../components/pages";
import { HeaderLeft } from "../Header";

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

function ModalRoutes() {
  return (
    <ModalStack.Navigator mode="modal" headerMode="none">
      <ModalStack.Screen name={LOG_DETAIL} component={LogDetail} />
      <ModalStack.Screen name={LOG_INPUT} component={LogInput} />
    </ModalStack.Navigator>
  );
}
function LogListNavigator() {
  return (
    <Stack.Navigator initialRouteName={LOG_LIST}>
      <Stack.Screen
        name={LOG_LIST}
        component={LogList}
        options={{ headerLeft: () => <HeaderLeft /> }}
      />
      <Stack.Screen name={LOG_DETAIL} component={ModalRoutes} />
    </Stack.Navigator>
  );
}

export default LogListNavigator;
