import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CATEGORY_LIST, CATEGORY_DETAIL } from "../../constants/path";
import { CategoryList, CategoryDetail } from "../../components/pages";

const Stack = createStackNavigator();

function CategoryListNavigator() {
  return (
    <Stack.Navigator initialRouteName={CATEGORY_LIST}>
      <Stack.Screen name={CATEGORY_LIST} component={CategoryList} />
      <Stack.Screen name={CATEGORY_DETAIL} component={CategoryDetail} />
    </Stack.Navigator>
  );
}

export default CategoryListNavigator;
