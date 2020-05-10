import React from 'react';
import { Text, TouchableHighlight, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BaseStyles } from '../../../app.styles';
import styles, { BackgroundGradientColors } from './styles';
import { fetchRestorePassword, AuthActions } from '../auth.slice';
import FormWarning from '../form-warning/form-warning';
import { ICON_NAMES } from '../../../constants/app-constants';

function goBack({ navigation }) {
    navigation.goBack();
}

function onChangeEmailField(dispatch, email) {
    dispatch(AuthActions.setRestorePasswordFormEmail({ email }));
}

function requestRestorePassword(dispatch, email) {
    dispatch(fetchRestorePassword({ email }));
}

const RestorePassword = ({ navigation }) => {
    const dispatch = useDispatch();
    const { email, error } = useSelector(state => state.auth.restorePasswordForm);

    return (
        <LinearGradient colors={BackgroundGradientColors} style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior="position">
                    <TouchableHighlight
                        style={styles.backIcon}
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() => goBack({ navigation })}>
                        <Icon
                            name={ICON_NAMES.ARROW_LEFT}
                            size={BaseStyles.fontSize.m}
                            color={BaseStyles.colors.black}
                        />
                    </TouchableHighlight>
                    <Text style={styles.title}>Ecommerce Store</Text>
                    <Text style={styles.description}>
                        Enter your email and we will send you an email to change password
                    </Text>
                    <TextInput
                        value={email}
                        onChangeText={text => onChangeEmailField(dispatch, text)}
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="email"
                        blurOnSubmit={true}
                        importantForAutofill="yes"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    {error ? <FormWarning error={error} /> : null}
                    <TouchableHighlight
                        style={styles.restoreButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() => requestRestorePassword(dispatch, email)}>
                        <Text style={styles.restoreText}>Submit</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </ScrollView>
        </LinearGradient>
    );
};

export default RestorePassword;
