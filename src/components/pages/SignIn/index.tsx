import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Context, Status } from "../../../contexts/ui";
import { Button, dismiss, TextField } from "../../atoms";
import { useControlledComponent } from "../../../lib/hooks";
import SignInWithTwitter from "./SignInWithTwitter";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginTop: 20,
  },
  text: {
    marginVertical: 20,
  },
});

export default function SignIn() {
  const { setApplicationState } = React.useContext(Context);
  const mailAddress = useControlledComponent("");
  const password = useControlledComponent("");
  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.container}>
        <View>
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
        </View>
        <View>
          <SignInWithTwitter />
          <Button
            onPress={() => setApplicationState(Status.AUTHORIZED)}
            style={styles.button}
            label="Sign in"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
