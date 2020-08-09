import React from "react";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import {
  INITIAL,
  LOADING,
  CATEGORY_LIST,
  SIGN_UP,
  LOG_LIST,
} from "../../constants/path";
import { Initial, Loading, SignUp } from "../../components/pages";
import * as UiContext from "../../contexts/ui";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogList from "./LogList";
import CategoryList from "./CategoryList";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName={CATEGORY_LIST}>
      <Tab.Screen name={CATEGORY_LIST} component={CategoryList} />
      <Tab.Screen name={LOG_LIST} component={LogList} />
    </Tab.Navigator>
  );
}
function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={SIGN_UP} component={SignUp} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={CATEGORY_LIST} component={TabRoutes} />;
    case UiContext.Status.FIRST_OPEN:
      defult: return <Stack.Screen name={INITIAL} component={Initial} />;
  }
}

function AuthWithRoutes() {
  const uiContext = React.useContext(UiContext.Context);
  return (
    <Stack.Navigator
      initialRouteName={LOADING}
      headerMode="none"
      screenOptions={{ cardStyleInterpolator: forFade }}
    >
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
}

export default AuthWithRoutes;
