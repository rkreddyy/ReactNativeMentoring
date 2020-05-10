import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MAIN_ROUTES } from '../routes';

import Profile from '../../screens/profile/profile';
import Main from '../../screens/main/main';
import FakeText from '../fake-component';
import styles from './styles';
import { BaseStyles } from '../../app.styles';
import { ICON_NAMES } from '../../constants/app-constants';
import Orders from '../../screens/orders/orders';
import Cart from '../../screens/cart/cart';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
    return (
        <DrawerContentScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Ecommerce Store</Text>
            </View>
            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>My Account</Text>
                </View>
                <DrawerItem
                    label={MAIN_ROUTES.PROFILE.title}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <Icon
                            name={ICON_NAMES.USER}
                            style={styles.itemIcon}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.PROFILE.name, { title: MAIN_ROUTES.PROFILE.title })}
                />
                <DrawerItem
                    label={MAIN_ROUTES.WISH_LIST.title}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <Icon
                            name={ICON_NAMES.HEART}
                            style={styles.itemIcon}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.WISH_LIST.name)}
                />
                <DrawerItem
                    label={MAIN_ROUTES.MY_CART.title}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <Icon
                            name={ICON_NAMES.CART}
                            style={styles.itemIcon}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title })}
                />
                <DrawerItem
                    label={MAIN_ROUTES.MY_ORDERS.title}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <Icon
                            name={ICON_NAMES.CART_ARROW_DOWN}
                            style={styles.itemIcon}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() =>
                        navigation.navigate(MAIN_ROUTES.MY_ORDERS.name, { title: MAIN_ROUTES.MY_ORDERS.title })
                    }
                />
            </View>

            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>Support</Text>
                </View>
                <DrawerItem
                    label={MAIN_ROUTES.EMAIL.name}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <Icon
                            name={ICON_NAMES.EMAIL}
                            style={styles.itemIcon}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.EMAIL.name)}
                />
                <DrawerItem
                    label={MAIN_ROUTES.CALL.name}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <Icon
                            name={ICON_NAMES.PHONE}
                            style={styles.itemIcon}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.CALL.name)}
                />
            </View>

            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>Others</Text>
                </View>
                <DrawerItem
                    label={MAIN_ROUTES.SHARE.name}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <Icon
                            name={ICON_NAMES.SHARE}
                            style={styles.itemIcon}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.SHARE.name)}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const MainDrawer = () => (
    <Drawer.Navigator initialRouteName={MAIN_ROUTES.MAIN.name} drawerContent={CustomDrawerContent}>
        <Drawer.Screen name={MAIN_ROUTES.MAIN.name} component={Main} />
        <Drawer.Screen
            name={MAIN_ROUTES.PROFILE.name}
            component={Profile}
            options={{ title: MAIN_ROUTES.PROFILE.title }}
        />
        <Drawer.Screen name={MAIN_ROUTES.WISH_LIST.name} component={FakeText} />
        <Drawer.Screen name={MAIN_ROUTES.MY_CART.name} component={Cart} />
        <Drawer.Screen name={MAIN_ROUTES.MY_ORDERS.name} component={Orders} />
    </Drawer.Navigator>
);

export default MainDrawer;
