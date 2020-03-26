import React from "react";
import { View, Switch } from "react-native";
import Text from "../Text";
import style from "./style";

const Checkbox = (props) => (
  <View style={style.container}>
    <View style={style.switchContainer}>
      <Switch {...props} />
    </View>
    <Text>{props.text}</Text>
  </View>
);

export default React.memo(Checkbox)

