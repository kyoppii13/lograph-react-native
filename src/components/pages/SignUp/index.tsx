import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context, Status } from "../../../contexts/ui";
import { useNavigation } from "@react-navigation/native";
import { SIGN_IN } from "../../../constants/path";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function SignUp() {
  const { navigate } = useNavigation();
  const { setApplicationState } = React.useContext(Context);
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.AUTHORIZED)}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}
