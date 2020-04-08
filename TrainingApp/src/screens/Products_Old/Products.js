import React from "react";
import { View, FlatList } from "react-native";
import ProductGridItem from "../../components/ProductGridItem";
import { PRODUCTS } from "../../mock";
import { MAIN_ROUTES } from "../../constants/routes";
import navigation from "../../navigation";
import style from "./style";

const Products = () => {
  const renderItem = ({ item: product }) => {
    return (
      <ProductGridItem
        product={product}
        onPress={onItemPress}
      />
    );
  };

  const onItemPress = item => {
    navigation.go(MAIN_ROUTES.PRODUCT, { product: item });
  };

  return (
    <View style={style.container}>
      <FlatList
        style={style.list}
        contentContainerStyle={style.list}
        data={PRODUCTS}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={style.separator} />}
        keyExtractor={product => product.name}
      />
    </View>
  );
};

export default React.memo(Products);
