import React from "react";
import { View, Text } from "react-native";
import style from "./style";

const Profile = () => {
  return (
    <View style={style.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default React.memo(Profile);
