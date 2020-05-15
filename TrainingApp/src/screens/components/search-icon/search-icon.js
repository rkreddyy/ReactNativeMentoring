import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import { ICON_NAMES } from '../../../constants/app-constants';

const SearchIcon = ({ needToDisplay, color }) =>
    needToDisplay ? (
        <Icon
            name={ICON_NAMES.SEARCH}
            size={BaseStyles.fontSize.l}
            color={color || BaseStyles.colors.grey}
            style={styles.searchIcon}
        />
    ) : null;

export default SearchIcon;
