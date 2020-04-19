import React from 'react';
import { TouchableHighlight } from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { BaseStyles } from '../../../../app.styles';
import styles from './styles';

const BackButton = ({ goBack }) =>
    goBack ? (
        <TouchableHighlight
            style={styles.menuButton}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={() => goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
        </TouchableHighlight>
    ) : null;

export default BackButton;
