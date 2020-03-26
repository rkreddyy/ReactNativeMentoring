import React from "react";
import { Image } from "react-native";

const style = {
  height: 150,
  width: "100%"
};

const ProductImage = (props) => {
  const { image } = props.product;

  return (
    <Image
      style={style}
      source={typeof image === "string" ? { url: image } : image}
      resizeMode="contain"
    />
  );
};

export default React.memo(ProductImage);
