import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import Text from '../Text'
import style from "./style";

const Button = props => {
  const { title, loading } = props;
  const onPress = () => {
    if (loading) {
      return null;
    }

    props.onPress && props.onPress();
  };

  return (
    <TouchableOpacity style={[style.container, props.style]} onPress={onPress}>
      <Text style={style.title}>{title}</Text>
      {!!loading && <ActivityIndicator />}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
