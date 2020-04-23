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
import store from './store/store';
import AppNavigation from './navigation/app-navigation';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
