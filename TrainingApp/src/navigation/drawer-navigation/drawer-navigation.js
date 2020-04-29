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

import { ROUTES } from '../routes';
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
                    label="My Profile"
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
                    onPress={() => navigation.navigate(ROUTES.PROFILE)}
                />
                <DrawerItem
                    label="My Wish List"
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
                    onPress={() => navigation.navigate(ROUTES.WISH_LIST)}
                />
                <DrawerItem
                    label="My Cart"
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
                    onPress={() => navigation.navigate(ROUTES.MY_CART)}
                />
                <DrawerItem
                    label="My Orders"
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
                    onPress={() => navigation.navigate(ROUTES.MY_ORDERS)}
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
                    onPress={() => navigation.navigate(ROUTES.MY_ORDERS)}
                />
            </View>

            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>Support</Text>
                </View>
                <DrawerItem
                    label="Email"
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
                    onPress={() => navigation.navigate(ROUTES.MY_ORDERS)}
                />
                <DrawerItem
                    label="Call"
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
                    onPress={() => navigation.navigate(ROUTES.MY_ORDERS)}
                />
            </View>

            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>Others</Text>
                </View>
                <DrawerItem
                    label="Share"
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
                    onPress={() => navigation.navigate(ROUTES.MY_ORDERS)}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const MainDrawer = () => (
    <Drawer.Navigator initialRouteName={ROUTES.MAIN} drawerContent={CustomDrawerContent}>
        <Drawer.Screen name={ROUTES.MAIN} component={Main} />
        <Drawer.Screen name={ROUTES.PROFILE} component={Profile} options={{ title: "My Profile" }} />
        <Drawer.Screen name={ROUTES.WISH_LIST} component={Settings} />
        <Drawer.Screen name={ROUTES.MY_CART} component={Cart} />
        <Drawer.Screen name={ROUTES.MY_ORDERS} component={Settings} />
    </Drawer.Navigator>
);

export default MainDrawer;
