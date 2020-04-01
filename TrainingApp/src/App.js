/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import 'react-native-gesture-handler';
import MainNavigator from './navigation/MainNavigator';
import navigation from './navigation';
import { SignUp } from './components/Auth/SignUp';

const App: () => React$Node = () => {
  return (
    <>
      {/* <SignUp></SignUp> */}
      <MainNavigator ref={navigation.init} />
    </>
  );
};

export default App;
