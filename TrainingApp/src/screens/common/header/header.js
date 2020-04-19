import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

import Search from '../search/search';
import RightIconGroup from './right-icon-group/right-icon-group';
import LeftIconGroup from './left-icon-group/left-icon-group';

import { HeaderActions } from './headerSlice';

function toggleSearch(dispatch) {
    dispatch(HeaderActions.toggleSearch());
}

const Header = ({ title, needToShowMenuButton, goBack, openMenu }) => {
    const dispatch = useDispatch();
    const { isSearchVisible } = useSelector(state => state.header);

    return (
        <View>
            <View style={styles.header}>
                <LeftIconGroup goBack={goBack} needToShowMenuButton={needToShowMenuButton} openMenu={openMenu} />
                <Text style={styles.title}>{title}</Text>
                <RightIconGroup toggleSearch={() => toggleSearch(dispatch)} isSearchVisible={isSearchVisible} />
            </View>
            <Search isSearchVisible={isSearchVisible} />
        </View>
    );
};

export default Header;
