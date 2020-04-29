import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faUser,
    faHeart,
    faShoppingCart,
    faCartArrowDown,
    faEnvelope,
    faPhoneAlt,
    faShareAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

import { MAIN_ROUTES } from '../routes';
import Main from '../../screens/main/main';
import Profile from '../../screens/profile';
import Settings from '../../screens/settings';
import Cart from '../../screens/cart';
import styles from './styles';
import { BaseStyles } from '../../app.styles';

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
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faUser}
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
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faHeart}
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
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faShoppingCart}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_CART.name)}
                />
                <DrawerItem
                    label={MAIN_ROUTES.MY_ORDERS.title}
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faCartArrowDown}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_ORDERS.name)}
                />
                <DrawerItem
                    label="Sign Out"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faSignOutAlt}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_ORDERS.name)}
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
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faEnvelope}
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
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faPhoneAlt}
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
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faShareAlt}
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
        <Drawer.Screen name={MAIN_ROUTES.WISH_LIST.name} component={Settings} />
        <Drawer.Screen name={MAIN_ROUTES.MY_CART.name} component={Cart} />
        <Drawer.Screen name={MAIN_ROUTES.MY_ORDERS.name} component={Settings} />
    </Drawer.Navigator>
);

export default MainDrawer;
