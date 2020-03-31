import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import Text from "../../components/Text";
import Checkbox from "../../components/Checkbox";
import style from "./style";

const CHECKBOXES = [
  "Allow recommendations",
  "Turn on notifications",
  "Cache images"
];

const Settings = () => {
  const [state, setState] = useState({
    checkboxes: {}
  })

  const renderCheckboxes = () =>
    CHECKBOXES.map((text, index) => {
      const onValueChange = value => {
        setState({
          checkboxes: { ...state.checkboxes, [index]: value }
        });
      };

      return (
        <Checkbox
          value={state.checkboxes[index]}
          onValueChange={onValueChange}
          text={text}
          key={text}
        />
      );
    });

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text.HEADER>Settings</Text.HEADER>
        <View>{renderCheckboxes()}</View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Settings)
