import React from 'react';
import { Text, TextInput, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ValidationComponent from 'react-native-form-validator';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles, { BackgroundGradientColors } from './styles';
import { BaseStyles } from '../../../app.styles';
import FormWarning from '../form-warning/form-warning';
import { ROUTES } from '../../../constants/routes';

class SignUp extends ValidationComponent {
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

    onSignUp() {
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

    goToSignIn() {
        this.props.navigation.navigate(ROUTES.SIGNIN);
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <LinearGradient colors={BackgroundGradientColors} style={styles.container}>
                    <KeyboardAvoidingView behavior="position" style={styles.container}>
                        <TouchableHighlight
                            style={styles.backIcon}
                            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                            hitSlop={BaseStyles.buttonHitSlop}
                            onPress={() => this.goBack()}>
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                size={BaseStyles.fontSize.m}
                                color={BaseStyles.colors.black}
                            />
                        </TouchableHighlight>
                        <Text style={styles.title}>Ecommerce Store</Text>
                        <TextInput
                            value={this.state.fullName}
                            onChangeText={fullName => this.setState({ fullName })}
                            style={styles.input}
                            placeholder={this.defaultNamePlaceholder}
                            placeholderTextColor={BaseStyles.colors.black}
                            autoCompleteType="name"
                            importantForAutofill="yes"
                            keyboardType="default"
                            textContentType="name"
                        />
                        {this.nameError ? <FormWarning error={this.nameError} /> : null}
                        <TextInput
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            style={styles.input}
                            placeholder={this.defaultEmailPlaceholder}
                            placeholderTextColor={BaseStyles.colors.black}
                            autoCompleteType="email"
                            blurOnSubmit={true}
                            importantForAutofill="yes"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                        {this.emailError ? <FormWarning error={this.emailError} /> : null}
                        <TextInput
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            style={styles.input}
                            placeholder={this.defaultPasswordPlaceholder}
                            placeholderTextColor={BaseStyles.colors.black}
                            autoCompleteType="password"
                            importantForAutofill="yes"
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        {this.passwordError ? <FormWarning error={this.passwordError} /> : null}
                        <TextInput
                            value={this.state.passwordConfirm}
                            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
                            style={styles.input}
                            placeholder={this.defaultPasswordConfirmPlaceholder}
                            placeholderTextColor={BaseStyles.colors.black}
                            autoCompleteType="password"
                            importantForAutofill="yes"
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        {this.passwordConfirmError ? <FormWarning error={this.passwordConfirmError} /> : null}
                        <TouchableHighlight
                            style={styles.signInButton}
                            underlayColor={BaseStyles.colors.lightBlue}
                            hitSlop={BaseStyles.buttonHitSlop}
                            onPress={() => this.onSignUp()}>
                            <Text style={styles.signInText}>Sign up</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                            hitSlop={BaseStyles.buttonHitSlop}
                            style={styles.signIn}
                            onPress={() => this.goToSignIn()}>
                            <Text style={styles.link}>Already have account? Sign In?</Text>
                        </TouchableHighlight>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </ScrollView>
        );
    }
}

export default SignUp;
