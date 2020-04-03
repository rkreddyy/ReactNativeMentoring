import React from 'react';
import { TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ValidationComponent from 'react-native-form-validator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BaseStyles } from '../../theme';
import { signUpStyles, BackgroundGradientColors } from './style';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { AuthWarning } from './AuthWarning';
import { AUTH_ROUTES } from "../../constants/routes";

export class Register extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = { fullName: '', email: '', password: '', passwordConfirm: '' };
        this.nameError = '';
        this.emailError = '';
        this.passwordError = '';
        this.passwordConfirmError = '';
        this.defaultNamePlaceholder = 'Full Name';
        this.defaultEmailPlaceholder = 'Email Address';
        this.defaultPasswordPlaceholder = 'Password';
        this.defaultPasswordConfirmPlaceholder = 'Confirm Password';
    }

    checkNameField() {
        this.validateForm();

        if (this.isFieldInError('fullName')) {
            this.emailError = this.getErrorsInField('fullName');
        } else {
            this.emailError = '';
        }
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

    checkPasswordConfirmField() {
        if (this.state.password !== this.state.passwordConfirm) {
            this.passwordConfirmError = 'Passwords should be the same';
        } else {
            this.passwordConfirmError = '';
        }
    }

    onChangePassword(password) {
        this.setState({ password });
    }

    onSignUp = () => {
        this.checkNameField();
        this.checkEmailField();
        this.checkPasswordField();
        this.checkPasswordConfirmField();
        const isInvalidData = this.emailError || this.nameError || this.passwordError || this.passwordConfirmError;
        if (!isInvalidData) {
        } else {
            this.clearForm();
        }
    }

    validateForm() {
        const passwordValidator = new RegExp(
            '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        );
        this.validate({
            name: { required: true, minlength: 3, maxlength: 12 },
            email: { required: true, email: true },
            password: { required: true, any: passwordValidator },
        });
    }

    clearForm() {
        this.emailError = '';
        this.passwordError = '';
        this.setState({ email: '', password: '' });
    }

    goToSignIn = () => {
        this.props.navigation.navigate(AUTH_ROUTES.LOGIN);
    }

    render() {
        return (
            <LinearGradient colors={BackgroundGradientColors} style={signUpStyles.container}>
                <KeyboardAvoidingView behavior="position" style={signUpStyles.container}>
                    <Button
                        style={signUpStyles.backIcon}
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() => this.goToSignIn()}>
                        <Icon
                            icon="faArrowLeft"
                            size={BaseStyles.fontSize.regular}
                            color={BaseStyles.colors.black}
                        />
                    </Button>
                    <Text style={signUpStyles.title}>Ecommerce Store</Text>
                    <TextInput
                        value={this.state.fullName}
                        onChangeText={fullName => this.setState({ fullName })}
                        style={signUpStyles.input}
                        placeholder={this.defaultNamePlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="name"
                        importantForAutofill="yes"
                        keyboardType="default"
                        textContentType="name"
                    />
                    {this.nameError ? <AuthWarning error={this.nameError} /> : null}
                    <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        style={signUpStyles.input}
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
                        onChangeText={password => this.setState({ password })}
                        style={signUpStyles.input}
                        placeholder={this.defaultPasswordPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    {this.passwordError ? <AuthWarning error={this.passwordError} /> : null}
                    <TextInput
                        value={this.state.passwordConfirm}
                        onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
                        style={signUpStyles.input}
                        placeholder={this.defaultPasswordConfirmPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    {this.passwordConfirmError ? <AuthWarning error={this.passwordConfirmError} /> : null}
                    <Button
                        style={signUpStyles.signInButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={this.onSignUp}
                        text='Register'
                        textStyle={signUpStyles.signInText} />
                    <Button
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={signUpStyles.signIn}
                        onPress={this.goToSignIn}
                        text='Already have account? Sign In?'
                        textStyle={signUpStyles.link} />
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}
