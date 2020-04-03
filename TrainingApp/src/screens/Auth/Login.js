import React from 'react';
import { TextInput, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ValidationComponent from 'react-native-form-validator';
import { BaseStyles } from '../../theme';
import { signInStyles, BackgroundGradientColors } from './style';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { AuthWarning } from './AuthWarning';
import { MAIN_ROUTES, AUTH_ROUTES } from "../../constants/routes";

export class Login extends ValidationComponent {
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

    onChange(text) {
        this.setState({ text });
    }

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

    onSignIn = () => {
        this.checkEmailField();
        this.checkPasswordField();
        if (!this.isFormValid()) {
        } else {
            this.clearForm();
            this.props.navigation.navigate(MAIN_ROUTES.DRAWER);
        }
    }

    onSignUp = () => {
        this.props.navigation.navigate(AUTH_ROUTES.REGISTER);
    }

    render() {
        return (
            <LinearGradient colors={BackgroundGradientColors} style={signInStyles.container}>
                <KeyboardAvoidingView behavior="position" style={signInStyles.container}>
                    <Text style={signInStyles.title}>Ecommerce Store</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={text => this.onChange(text)}
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
                        onChangeText={text => this.onChange(text)}
                        style={signInStyles.input}
                        placeholder={this.defaultPasswordPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    {this.passwordError ? <AuthWarning error={this.passwordError} /> : null}
                    <Button
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={signInStyles.restorePassword}
                        text='Forgot Password?'
                        textStyle={signInStyles.link} />
                    <Button
                        style={signInStyles.signInButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={this.onSignIn}
                        text='Sign in'
                        textStyle={signInStyles.signInText} />
                    <Button
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={signInStyles.signUp}
                        onPress={this.onSignUp}
                        text='New Here? Sign Up?'
                        textStyle={signInStyles.link} />
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}
