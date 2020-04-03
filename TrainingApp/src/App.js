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

const App: () => React$Node = () => {
  return (
    <>
      <MainNavigator ref={navigation.init} />
    </>
  );
};

export default App;
