import React, { useState } from "react";
import { ScrollView } from "react-native";
import Text from "../../components/Text";
import ProductImage from "../../components/ProductImage";
import Button from "../../components/Button";
import style from "./style";

const Product = React.memo(props => {
  const [loading, setLoading] = useState(false);
  const { product } = props.route.params;
  const { navigation } = props;
  navigation.setOptions({
    title: product.name
  });

  const onPress = async () => {
    setLoading(true);

    // Wait 5 seconds
    await new Promise(res => {
      setTimeout(res, 5000);
    });

    setLoading(false);
    navigation.goBack();
  };

  return (
    <React.Fragment>
      <ScrollView
        style={style.container}
        contentContainerStyle={style.contentContainer}
      >
        <ProductImage product={product} />
        <Text.TITLE style={style.title}>{product.name}</Text.TITLE>
        <Text>{product.description}</Text>
      </ScrollView>
      <Button loading={loading} onPress={onPress} title="Add to cart" />
    </React.Fragment>
  );
});

export default Product;
