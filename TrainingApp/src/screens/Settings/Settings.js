import React, { useState } from "react";
import { View, SafeAreaView, Button } from "react-native";
import Text from "../../components/Text";
import Checkbox from "../../components/Checkbox";
import style from "./style";
import * as authActions from '../../store/actions/auth';
import { ROUTES } from "../../constants/routes";

const CHECKBOXES = [
  "Allow recommendations",
  "Turn on notifications",
  "Cache images"
];

const Settings = ({ navigation }) => {
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

  const logout = () => {
    authActions.logout();
    navigation.navigate(ROUTES.AUTH, { isLoading: false });
  }

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text.HEADER>Settings</Text.HEADER>
        <View>{renderCheckboxes()}</View>
        <Button
          title={'Logout'}
          onPress={() => { logout() }}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Settings)
