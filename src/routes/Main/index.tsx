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
  USER_INFO,
} from "../../constants/path";
import { Initial, Loading, SignUp } from "../../components/pages";
import * as UiContext from "../../contexts/ui";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LogList from "./LogList";
import CategoryList from "./CategoryList";
import UserInfo from "./UserInfo";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CategoryListDrawer = createDrawerNavigator();
const LogListDrawer = createDrawerNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
function CategoryListWithDrawer() {
  return (
    <CategoryListDrawer.Navigator initialRouteName={CATEGORY_LIST}>
      <CategoryListDrawer.Screen
        name={CATEGORY_LIST}
        component={CategoryList}
      />
      <CategoryListDrawer.Screen name={USER_INFO} component={UserInfo} />
    </CategoryListDrawer.Navigator>
  );
}
function LogListWithDrawer() {
  return (
    <LogListDrawer.Navigator initialRouteName={LOG_LIST}>
      <LogListDrawer.Screen name={LOG_LIST} component={LogList} />
      <LogListDrawer.Screen name={USER_INFO} component={UserInfo} />
    </LogListDrawer.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName={CATEGORY_LIST}>
      <Tab.Screen name={CATEGORY_LIST} component={CategoryListWithDrawer} />
      <Tab.Screen name={LOG_LIST} component={LogListWithDrawer} />
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
