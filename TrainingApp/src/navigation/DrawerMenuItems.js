import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {    
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    );
  }