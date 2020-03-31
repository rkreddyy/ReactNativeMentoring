/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import MainNavigator from './navigation/MainNavigator';
// import navigation from './navigation';
import { SignUp } from './components/Auth/SignUp';

const App: () => React$Node = () => {
  return (
    <>
      <SignUp />
      {/* <MainNavigator ref={navigation.init} />
      <Provider store={store}>
        <SignUp />
      </Provider> */}
    </>
  );
};

export default App;
