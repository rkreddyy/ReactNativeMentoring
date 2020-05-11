import React, { useEffect } from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CategoryTitle from './category-title/category-title';
import CategoryPreview from './category-preview/category-preview';
import styles from './styles';
import Header from '../common/header/header';
import Divider from '../common/divider/divider';
import Warning from '../auth/form-warning/form-warning';
import { MAIN_ROUTES } from '../../navigation/routes';
import { fetchCategories } from './main.slice';
import { BaseStyles } from '../../app.styles';
import { FlatList } from 'react-native-gesture-handler';

const openMenu = navigation => {
    navigation.openDrawer();
};
const getCategoriesList = (categories, navigation) => {
    return categories.map(category => {
        return (
            <CategoryTitle
                category={category}
                key={category.category_id}
                openCategoryProductList={cat => openCategoryProductList(navigation, cat)}
            />
        );
    });
};
const gotoProductDetails = ({ navigation, product }) => {
    navigation.navigate(MAIN_ROUTES.PRODUCT_DETAILS.name, { product });
};
const openCategoryProductList = (navigation, category) => {
    navigation.navigate(MAIN_ROUTES.PRODUCT_LIST.name, { category });
};

const Main = ({ navigation }) => {
    const dispatch = useDispatch();

    const { categories, isLoading, error, productsByCategoryId } = useSelector(state => state.main);

    useEffect(() => {
        if (!isLoading && !error && !categories.length) {
            dispatch(fetchCategories());
        }
    }, [isLoading, error, categories, dispatch]);

    const goToCart = () => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title });

    return (
        <View style={styles.wrapper}>
            <Header
                title="Products"
                needToShowMenuButton={true}
                openMenu={() => {
                    openMenu(navigation);
                }}
                goToCart={goToCart}
            />
            {isLoading ? (
                <ActivityIndicator size="large" color={BaseStyles.colors.lightBlue} style={styles.spinner} />
            ) : error ? (
                <Warning error={error} />
            ) : (
                <>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.groups}>{getCategoriesList(categories, navigation)}</View>
                        </ScrollView>
                    </View>
                    <Divider />
                    <View style={styles.items}>
                        <FlatList
                            data={categories}
                            renderItem={category => {
                                return (
                                    <CategoryPreview
                                        category={category.item}
                                        products={productsByCategoryId[category.item.category_id]}
                                        gotoProductDetails={product => {
                                            gotoProductDetails({ navigation, product });
                                        }}
                                        openCategoryProductList={cat => openCategoryProductList(navigation, cat)}
                                    />
                                );
                            }}
                            keyExtractor={category => {
                                return category.category_id;
                            }}
                        />
                    </View>
                </>
            )}
        </View>
    );
};

export default Main;
