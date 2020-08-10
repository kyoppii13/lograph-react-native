import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context, Status } from "../../../contexts/ui";
import { useNavigation } from "@react-navigation/native";
import { SIGN_IN, SIGN_UP } from "../../../constants/path";
import { COLOR } from "../../../constants/theme";
import { Button } from "../../atoms";

const padding = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.MAIN,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    paddingVertical: padding,
  },
  button: {
    marginBottom: 40,
    width: 300,
  },
});

export default function SignUp() {
  const { navigate } = useNavigation();
  const { setApplicationState } = React.useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>SignUp</Text>
        <Button
          onPress={() => setApplicationState(Status.AUTHORIZED)}
          style={styles.button}
          label="Sign up"
        />
        <Button
          onPress={() => navigate(SIGN_IN)}
          style={styles.button}
          label="Sign in"
        />
      </View>
    </View>
  );
}
