import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CATEGORY_LIST,
  CATEGORY_DETAIL,
  LOG_INPUT,
} from "../../constants/path";
import { CategoryList, CategoryDetail, LogInput } from "../../components/pages";
import { HeaderLeft } from "../Header";

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

function ModalRoutes() {
  return (
    <ModalStack.Navigator mode="modal" headerMode="none">
      <ModalStack.Screen name={CATEGORY_DETAIL} component={CategoryDetail} />
      <ModalStack.Screen name={LOG_INPUT} component={LogInput} />
    </ModalStack.Navigator>
  );
}

function CategoryListNavigator() {
  return (
    <Stack.Navigator initialRouteName={CATEGORY_LIST}>
      <Stack.Screen
        name={CATEGORY_LIST}
        component={CategoryList}
        options={{ headerLeft: () => <HeaderLeft /> }}
      />
      <Stack.Screen name={CATEGORY_DETAIL} component={ModalRoutes} />
    </Stack.Navigator>
  );
}

export default CategoryListNavigator;
