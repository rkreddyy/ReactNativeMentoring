/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import appStore from './store/store';
import MainNavigation from './navigation/app-navigation';

const App = () => {
  return (
    <Provider store={appStore}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
