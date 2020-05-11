import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BaseStyles } from '../../../../app.styles';
import styles from './styles';
import { ICON_NAMES } from '../../../../constants/app-constants';

const BackButton = ({ goBack }) =>
    goBack ? (
        <TouchableHighlight
            style={styles.menuButton}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={() => goBack()}>
            <Icon name={ICON_NAMES.ARROW_LEFT} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
        </TouchableHighlight>
    ) : null;

export default BackButton;
