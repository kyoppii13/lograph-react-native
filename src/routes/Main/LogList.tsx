import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LOG_LIST, LOG_DETAIL, LOG_INPUT } from "../../constants/path";
import { LogList, LogDetail, LogInput } from "../../components/pages";
import { HeaderLeft, headerStyle, headerTintColor } from "../Header";
import { COLOR } from "../../constants/theme";

const cardStyle = {
  backgroundColor: COLOR.MAIN,
};
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
    <Stack.Navigator
      initialRouteName={LOG_LIST}
      screenOptions={{
        cardStyle,
        headerStyle,
        headerTintColor,
      }}
    >
      <Stack.Screen
        name={LOG_LIST}
        component={LogList}
        options={{ headerLeft: () => <HeaderLeft />, title: "Log List" }}
      />
      <Stack.Screen
        name={LOG_DETAIL}
        component={ModalRoutes}
        options={{ title: "Log Detail" }}
      />
    </Stack.Navigator>
  );
}

export default LogListNavigator;
