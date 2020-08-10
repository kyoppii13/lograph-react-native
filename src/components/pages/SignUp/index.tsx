import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Context, Status } from "../../../contexts/ui";
import { useNavigation } from "@react-navigation/native";
import { SIGN_IN, SIGN_UP } from "../../../constants/path";
import { COLOR } from "../../../constants/theme";
import { Button, dismiss, TextField } from "../../atoms";
import { useControlledComponent } from "../../../lib/hooks";

const padding = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    paddingVertical: padding,
  },
  button: {
    marginTop: 20,
  },
  text: {
    marginVertical: 20,
  },
});

export default function SignUp() {
  const { navigate } = useNavigation();
  const { setApplicationState } = React.useContext(Context);
  const mailAddress = useControlledComponent("");
  const password = useControlledComponent("");

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.container}>
        <TextField
          label="email"
          value={mailAddress.value}
          onChangeText={mailAddress.onChangeText}
          style={styles.text}
          autoCompleteType="email"
        />
        <TextField
          label="password"
          value={password.value}
          onChangeText={password.onChangeText}
          style={styles.text}
          autoCompleteType="password"
          secureTextEntry={true}
        />
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
    </TouchableWithoutFeedback>
  );
}
