import React, { useEffect } from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
    Vibration,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import styles, { BackgroundGradientColors } from './styles';
import { BaseStyles } from '../../../app.styles';
import { AuthActions, fetchSignIn } from '../../../store/auth/authSlice';
import { PATTERN } from '../../../constants/vibration-pattern';
import { AUTH_ROUTES } from '../../../navigation/routes';

function onChangeEmailField(dispatch, text) {
    if (text.includes('@')) {
        dispatch(AuthActions.setSignInEmail({ email: text }));
    } else {
        dispatch(AuthActions.setSignInUserName({ userName: text }));
    }
}

function onChangePasswordField(dispatch, password) {
    dispatch(AuthActions.setSignInPassword({ password }));
}

function restorePassword({ navigation }) {
    navigation.navigate(AUTH_ROUTES.RESTORE_PASSWORD);
}

function requestSignIn(dispatch, { email, userName, password }) {
    if ((email || userName) && password) {
        dispatch(fetchSignIn({ email, userName, password }));
    } else {
        Vibration.vibrate(PATTERN.ONE);
        Alert.alert('An Error Occurred!', "Username and password cannot be empty!", [{ text: 'Ok' }]);
    }
}

function goToSignUp(navigation) {
    navigation.navigate(AUTH_ROUTES.SIGN_UP);
}

const SignIn = ({ navigation }) => {
    const dispatch = useDispatch();

    const { email, password, userName } = useSelector(state => state.auth.signInForm);
    const { signInError } = useSelector(state => state.auth);

    useEffect(() => {
        if (signInError && signInError !== 'no_saved_token_found') {
            Vibration.vibrate(PATTERN.ONE);
            Alert.alert('An Error Occurred!', signInError, [{ text: 'Ok' }]);
        }
    }, [signInError]);

    return (
        <ScrollView>
            <LinearGradient colors={BackgroundGradientColors} style={styles.container}>
                <KeyboardAvoidingView behavior="position" style={styles.container}>
                    <Text style={styles.title}>Ecommerce Store</Text>
                    <TextInput
                        value={email || userName}
                        onChangeText={text => onChangeEmailField(dispatch, text)}
                        style={styles.input}
                        placeholder="Email Address or Login"
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="email"
                        blurOnSubmit={true}
                        importantForAutofill="yes"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <TextInput
                        value={password}
                        onChangeText={updatePassword => onChangePasswordField(dispatch, updatePassword)}
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.restorePassword}
                        onPress={() => restorePassword({ navigation })}>
                        <Text style={styles.link}>Forgot Password?</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.signInButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() =>
                            requestSignIn(dispatch, {
                                email,
                                password,
                                userName,
                            })
                        }>
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.signUp}
                        onPress={() => goToSignUp(navigation)}>
                        <Text style={styles.link}>New Here? Sign Up?</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </LinearGradient>
        </ScrollView>
    );
};

export default SignIn;
