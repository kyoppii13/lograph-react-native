import * as React from "react";
import Button from "../../atoms/Button";
import { Context, Status } from "../../../contexts/ui";
export default function SignInWithTwitter() {
  const { setApplicationState } = React.useContext(Context);
  return (
    <Button
      onPress={() => setApplicationState(Status.AUTHORIZED)}
      icon="twitter"
      label="Sign In with Twitter"
    ></Button>
  );
}
