import React from "react";
import { View, SafeAreaView } from "react-native";
import SignInComponent from "../../components/Auth/SignIn";

const SignIn = () => {
  return (
    <SafeAreaView style={style.container}>
      <SignInComponent />
    </SafeAreaView>
  );
};

export default React.memo(SignIn);
