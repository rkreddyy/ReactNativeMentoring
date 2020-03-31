import React from "react";
import { Text as RNText } from "react-native";
import { THEMES } from "./style";

const Text = (props) => {
  const { themeStyle, style } = props;
  return <RNText {...props} style={[themeStyle, style]} />;
};

export default Object.keys(THEMES).reduce((component, themeName) => {
  component[themeName] = props => (
    <Text {...props} themeStyle={THEMES[themeName]} />
  );
  component[themeName].displayName = `Text.${themeName}`;

  return component;
}, React.memo(Text));
