import React from "react";
import { View, SafeAreaView } from "react-native";
import SignUpComponent from "../../components/Auth/SignUp";

const SignUp = () => {
  return (
    <SafeAreaView style={style.container}>
      <SignUpComponent />
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
