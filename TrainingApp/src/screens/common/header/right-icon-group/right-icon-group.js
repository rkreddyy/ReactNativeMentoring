import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import SearchIcon from '../../search-icon/search-icon';

import { BaseStyles } from '../../../../app.styles';
import styles from './styles';

const RightIconGroup = ({ toggleSearch, isSearchVisible }) => (
    <View style={styles.wrapper}>
        <TouchableHighlight
            style={styles.menuButton}
            underlayColor={BaseStyles.colors.transparent}
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={toggleSearch}>
            <SearchIcon needToDisplay={!isSearchVisible} color={BaseStyles.colors.white} />
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.menuButton}
            hitSlop={BaseStyles.buttonHitSlop}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            onPress={() => {
                console.log('open wishlist');
            }}>
            <FontAwesomeIcon icon={faShoppingCart} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
        </TouchableHighlight>
    </View>
);

export default RightIconGroup;
