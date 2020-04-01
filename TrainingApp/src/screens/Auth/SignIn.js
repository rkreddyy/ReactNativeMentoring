import React from 'react';
import { Text, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ValidationComponent from 'react-native-form-validator';
import { BaseStyles } from '../../theme';
import { signInStyles, BackgroundGradientColors } from './style';
import { AuthWarning } from './AuthWarning';
import { MAIN_ROUTES, AUTH_ROUTES } from "../../constants/routes";

export class SignIn extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.emailError = '';
        this.passwordError = '';
        this.defaultEmailPlaceholder = 'Email Address';
        this.defaultPasswordPlaceholder = 'Password';
    }

    checkEmailField() {
        this.validateForm();

        if (this.isFieldInError('email')) {
            this.emailError = this.getErrorsInField('email');
        } else {
            this.emailError = '';
        }
    }

    checkPasswordField() {
        this.validateForm();

        if (this.isFieldInError('password')) {
            this.passwordError = this.getErrorsInField('password');
        } else {
            this.passwordError = '';
        }
    }

    onChangeEmail(email) {
        this.setState({ email });
    }

    onChangePassword(password) {
        this.setState({ password });
    }

    onRestorePassword() { }

    validateForm() {
        const passwordValidator = new RegExp(
            '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        );
        this.validate({
            email: { required: true, email: true },
            password: { required: true, any: passwordValidator },
        });
    }

    clearForm() {
        this.emailError = '';
        this.passwordError = '';
        this.setState({ email: '', password: '' });
    }

    onSignIn() {
        this.checkEmailField();
        this.checkPasswordField();
        if (!this.isFormValid()) {
        } else {
            this.clearForm();
            this.props.navigation.navigate(MAIN_ROUTES.DRAWER);
        }
    }

    onSignUp() {
        this.props.navigation.navigate(AUTH_ROUTES.SIGNUP);
    }

    render() {
        return (
            <LinearGradient colors={BackgroundGradientColors} style={signInStyles.container}>
                <KeyboardAvoidingView behavior="position" style={signInStyles.container}>
                    <Text style={signInStyles.title}>Ecommerce Store</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={text => this.onChangeEmail(text)}
                        style={signInStyles.input}
                        placeholder={this.defaultEmailPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="email"
                        blurOnSubmit={true}
                        importantForAutofill="yes"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    {this.emailError ? <AuthWarning error={this.emailError} /> : null}
                    <TextInput
                        value={this.state.password}
                        onChangeText={text => this.onChangePassword(text)}
                        style={signInStyles.input}
                        placeholder={this.defaultPasswordPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    {this.passwordError ? <AuthWarning error={this.passwordError} /> : null}
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={signInStyles.restorePassword}
                        onPress={() => this.onRestorePassword()}>
                        <Text style={signInStyles.link}>Forgot Password?</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={signInStyles.signInButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() => this.onSignIn()}>
                        <Text style={signInStyles.signInText}>Sign in</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={signInStyles.signUp}
                        onPress={() => this.onSignUp()}>
                        <Text style={signInStyles.link}>New Here? Sign Up?</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}
