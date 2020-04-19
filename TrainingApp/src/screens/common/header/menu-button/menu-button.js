import React from 'react';
import { TouchableHighlight } from 'react-native';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { BaseStyles } from '../../../../app.styles';
import styles from './styles';

const MenuButton = ({ openMenu }) => (
    <TouchableHighlight
        style={styles.menuButton}
        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
        hitSlop={BaseStyles.buttonHitSlop}
        onPress={openMenu}>
        <FontAwesomeIcon icon={faBars} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
    </TouchableHighlight>
);

export default MenuButton;
