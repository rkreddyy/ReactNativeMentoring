import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';

const SearchIcon = ({ needToDisplay, color }) =>
    needToDisplay ? (
        <FontAwesomeIcon
            style={styles.searchIcon}
            icon={faSearch}
            size={BaseStyles.fontSize.l}
            color={color || BaseStyles.colors.grey}
        />
    ) : null;

export default SearchIcon;
