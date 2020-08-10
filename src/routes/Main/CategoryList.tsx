import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CATEGORY_LIST,
  CATEGORY_DETAIL,
  LOG_INPUT,
} from "../../constants/path";
import { CategoryList, CategoryDetail, LogInput } from "../../components/pages";
import { HeaderLeft, headerTintColor, headerStyle } from "../Header";
import { COLOR } from "../../constants/theme";

const cardStyle = {
  backgroundColor: COLOR.MAIN,
};
const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

function ModalRoutes() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{ cardStyle, headerTintColor, headerStyle }}
    >
      <ModalStack.Screen name={CATEGORY_DETAIL} component={CategoryDetail} />
      <ModalStack.Screen name={LOG_INPUT} component={LogInput} />
    </ModalStack.Navigator>
  );
}

function CategoryListNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={CATEGORY_LIST}
      screenOptions={{ cardStyle, headerTintColor, headerStyle }}
    >
      <Stack.Screen
        name={CATEGORY_LIST}
        component={CategoryList}
        options={{ headerLeft: () => <HeaderLeft />, title: "Category List" }}
      />
      <Stack.Screen
        name={CATEGORY_DETAIL}
        component={ModalRoutes}
        options={{ title: "Category Detail" }}
      />
    </Stack.Navigator>
  );
}

export default CategoryListNavigator;
