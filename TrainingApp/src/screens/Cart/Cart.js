import React from "react";
import { View, SafeAreaView } from "react-native";
import Text from "../../components/Text";
import style from "./style";

const Cart = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text.HEADER>Cart</Text.HEADER>
      <View style={style.empty}>
        <Text>Cart is empty</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Cart);
