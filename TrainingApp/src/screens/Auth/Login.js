import React from 'react';
import { TextInput, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ValidationComponent from 'react-native-form-validator';
import { BaseStyles } from '../../theme';
import { signInStyles, BackgroundGradientColors } from './style';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { AuthWarning } from './AuthWarning';
import { ApplicationStyles, Colors } from '../../themes';
import { MAIN_ROUTES, AUTH_ROUTES } from "../../constants/routes";

export class Login extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.emailError = '';
        this.passwordError = '';
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
        this.setState({email});
    }

    onChangePassword(password) {
        this.setState({password});
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
            <LinearGradient colors={BackgroundGradientColors} style={ApplicationStyles.screen.container}>
                <KeyboardAvoidingView behavior="position" style={ApplicationStyles.screen.container}>
                    <Text style={ApplicationStyles.screen.mainTitle}>Ecommerce Store</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={text => this.onChangeEmail(text)}
                        style={ApplicationStyles.screen.input}
                        placeholder='Email Adress'
                        placeholderTextColor={Colors.black}
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
                        style={ApplicationStyles.screen.input}
                        placeholder='Password'
                        placeholderTextColor={Colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    {this.passwordError ? <AuthWarning error={this.passwordError} /> : null}
                    <Button
                        underlayColor={Colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={signInStyles.restorePassword}
                        text='Forgot Password?'
                        textStyle={ApplicationStyles.screen.link} />
                    <Button
                        style={signInStyles.signInButton}
                        underlayColor={Colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={this.onSignIn}
                        text='Sign in'
                        textStyle={signInStyles.signInText} />
                    <Button
                        underlayColor={Colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={signInStyles.signUp}
                        onPress={this.onSignUp}
                        text='New Here? Sign Up?'
                        textStyle={ApplicationStyles.screen.link} />
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}
