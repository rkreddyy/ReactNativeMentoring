import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import ProductImage from "../ProductImage";
import Text from "../Text";
import style from "./style";
import {BaseStylesSets} from "../../app.styles";
import {getPriceString, getDiscountString} from "../../utils/formatPrice";

const ProductGridItem = (props) => {
  const { product, onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <View style={style.container}>
        <ProductImage product={product} />
        <View style={BaseStylesSets.priceWrapper}>
          <Text style={BaseStylesSets.price}>{getPriceString(product.price)}</Text>
          <Text style={BaseStylesSets.oldPrice}>{getPriceString(product.oldPrice)}</Text>
          <Text style={BaseStylesSets.discount}>{getDiscountString(product.discount)}</Text>
        </View>
        <Text.TITLE style={style.name}>{product.name}</Text.TITLE>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductGridItem)

