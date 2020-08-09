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
  LOG_INPUT,
  CATEGORY_INPUT,
} from "../../constants/path";
import {
  Initial,
  Loading,
  SignUp,
  LogInput,
  CategoryInput,
} from "../../components/pages";
import * as UiContext from "../../contexts/ui";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LogList from "./LogList";
import CategoryList from "./CategoryList";
import UserInfo from "./UserInfo";

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CategoryListDrawer = createDrawerNavigator();
const LogListDrawer = createDrawerNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const getActiveRouteName = (state: any): string => {
  if (!state || !state.routes) {
    return "";
  }
  const route = state.routes[state.index];
  // TODO: なぜ再帰?
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};
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
    <Tab.Navigator
      initialRouteName={CATEGORY_LIST}
      screenOptions={(props: any) => {
        const routeName = getActiveRouteName(props.route.state);
        return {
          tabBarVisible: routeName !== USER_INFO,
        };
      }}
    >
      <Tab.Screen name={CATEGORY_LIST} component={CategoryListWithDrawer} />
      <Tab.Screen name={LOG_LIST} component={LogListWithDrawer} />
    </Tab.Navigator>
  );
}
function TabWithModalRoutes() {
  return (
    <ModalStack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name={CATEGORY_LIST} component={TabRoutes} />
      <Stack.Screen name={CATEGORY_INPUT} component={CategoryInput} />
      <Stack.Screen name={LOG_INPUT} component={LogInput} />
    </ModalStack.Navigator>
  );
}
function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={SIGN_UP} component={SignUp} />;
    case UiContext.Status.AUTHORIZED:
      return (
        <Stack.Screen name={CATEGORY_LIST} component={TabWithModalRoutes} />
      );
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
