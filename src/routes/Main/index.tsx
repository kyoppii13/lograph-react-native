import React from "react";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import { INITIAL, LOADING, CATEGORY_LIST, SIGN_UP } from "../../constants/path";
import { Initial, Loading, CategoryList, SignUp } from "../../components/pages";
import * as UiContext from "../../contexts/ui";

const Stack = createStackNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHRIZED:
      return <Stack.Screen name={SIGN_UP} component={SignUp} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={CATEGORY_LIST} component={CategoryList} />;
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
