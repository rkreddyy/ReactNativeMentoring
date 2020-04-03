import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import Text from '../Text';
import { Metrics } from '../../themes'

const Button = ({
  text,
  showText = true,
  loading,
  onPress,
  style,
  textStyle,
  disabled = false,
  disableTimeout = 1000
}) => {
  const [disableButton, setDisableButton] = useState(disabled)
  const handlePress = () => {
    setDisableButton(true)
    if (onPress) {
      onPress()
    }
    setTimeout(() => {
      setDisableButton(false)
    }, disableTimeout)
  };

  return (
    <TouchableOpacity
      activeOpacity={Metrics.buttons.pressOpacity}
      style={style}
      onPress={handlePress}
      disabled={disableButton}
    >
      {showText ? (
        <>
          <Text style={textStyle}>
            {text}
          </Text>
          {!!loading && <ActivityIndicator />}
        </>
      ) : null}
    </TouchableOpacity>
  )
}

export default React.memo(Button);
