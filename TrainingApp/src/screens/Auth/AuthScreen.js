import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
    ScrollView,
    View,
    KeyboardAvoidingView,
    Button,
    ActivityIndicator,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import Input from '../../components/Input';
import Card from '../../components/Card';
import { Colors } from '../../themes';
import styles, { BackgroundGradientColors } from './style';
import * as authActions from '../../store/actions/auth';
import { ROUTES } from '../../constants/routes';
import { FORM_INPUT_UPDATE } from '../../store/actions/actionTypes';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const AuthScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });

    useEffect(() => {
        if (error) {
            Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    const authHandler = async () => {
        let action;
        if (isSignup) {
            action = authActions.signup(
                formState.inputValues.username,
                formState.inputValues.email,
                formState.inputValues.password,
                formState.inpputValues.confirmPassword,
                formState.inpputValues.firstName,
                formState.inpputValues.lastName,
                formState.inpputValues.address1,
                formState.inpputValues.city,
                formState.inpputValues.postalCode,
            );
        } else {
            action = authActions.login(
                formState.inputValues.username,
                formState.inputValues.password
            );
        }
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(action);
            props.navigation.navigate(ROUTES.SHOP);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <LinearGradient colors={BackgroundGradientColors} style={styles.gradient}>
                <Card style={styles.authContainer}>
                    <ScrollView>
                        {
                            isSignup &&
                            <>
                                <Input
                                    id="firstName"
                                    label="First Name"
                                    keyboardType="default"
                                    required
                                    autoCapitalize="none"
                                    errorText="Please enter valid First Name."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                                <Input
                                    id="lastName"
                                    label="Last Name"
                                    keyboardType="default"
                                    required
                                    autoCapitalize="none"
                                    errorText="Please enter valid Last Name."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                                <Input
                                    id="email"
                                    label="E-Mail"
                                    keyboardType="email-address"
                                    required
                                    email
                                    autoCapitalize="none"
                                    errorText="Please enter a valid email address."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                            </>
                        }
                        <Input
                            id="username"
                            label="Username"
                            keyboardType="default"
                            required
                            autoCapitalize="none"
                            errorText="Please enter a valid username."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />
                        <Input
                            id="password"
                            label="Password"
                            keyboardType="default"
                            secureTextEntry
                            required
                            minLength={5}
                            autoCapitalize="none"
                            errorText="Please enter a valid password."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />
                        {
                            isSignup &&
                            <>
                                <Input
                                    id="passwordConfirm"
                                    label="Confirm Password"
                                    keyboardType="default"
                                    secureTextEntry
                                    required
                                    minLength={5}
                                    autoCapitalize="none"
                                    errorText="Please enter a valid password."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                                {/* <Input
                                    id="telephone"
                                    label="Telephone"
                                    keyboardType="phone-pad"
                                    secureTextEntry
                                    required
                                    minLength={5}
                                    autoCapitalize="none"
                                    errorText="Please enter a valid telephone number."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                /> */}
                                <Input
                                    id="address1"
                                    label="Address Line 1"
                                    keyboardType="default"
                                    secureTextEntry
                                    required
                                    minLength={5}
                                    autoCapitalize="none"
                                    errorText="Please enter valid address line 1."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                                <Input
                                    id="city"
                                    label="City"
                                    keyboardType="default"
                                    secureTextEntry
                                    required
                                    minLength={5}
                                    autoCapitalize="none"
                                    errorText="Please enter valid city name."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                                <Input
                                    id="postalCode"
                                    label="Postal Code"
                                    keyboardType="default"
                                    secureTextEntry
                                    required
                                    minLength={6}
                                    autoCapitalize="none"
                                    errorText="Please enter valid postal code."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                                {/* <Input
                                    id="country"
                                    label="Country"
                                    keyboardType="default"
                                    secureTextEntry
                                    required
                                    minLength={5}
                                    autoCapitalize="none"
                                    errorText="Please choose a country."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                />
                                <Input
                                    id="zone"
                                    label="Zone"
                                    keyboardType="default"
                                    secureTextEntry
                                    required
                                    minLength={5}
                                    autoCapitalize="none"
                                    errorText="Please choose a Zone."
                                    onInputChange={inputChangeHandler}
                                    initialValue=""
                                /> */}

                            </>
                        }
                        <View style={styles.buttonContainer}>
                            {isLoading ? (
                                <ActivityIndicator size="small" color={Colors.primary} />
                            ) : (
                                    <Button
                                        title={isSignup ? 'Sign Up' : 'Login'}
                                        color={Colors.button}
                                        onPress={authHandler}
                                    />
                                )}
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                                color={Colors.button}
                                onPress={() => {
                                    setIsSignup(prevState => !prevState);
                                }}
                            />
                        </View>
                    </ScrollView>
                </Card>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
};

export default AuthScreen;
