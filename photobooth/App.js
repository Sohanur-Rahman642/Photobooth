/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import { Provider } from 'react-redux';
 import Home from './ui/screens/Home';
 import { store } from './redux/store/store'

 


const App = () => {

  return (
    <Provider store={store}>
        <Home/>
    </Provider>
  );
};



export default App;
