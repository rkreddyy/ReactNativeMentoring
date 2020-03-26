import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import ProductImage from "../ProductImage";
import Text from "../Text";
import style from "./style";

const ProductGridItem = (props) => {
  const { product, onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <View style={style.container}>
        <ProductImage product={product} />
        <Text style={style.name}>{product.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductGridItem)

