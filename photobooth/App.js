/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import { Provider } from 'react-redux';
 import { store } from './redux/store/store'
 import Navigator from './navigation/Navigator'

 


const App = () => {

  return (
    <Provider store={store}>
         <Navigator/>
    </Provider>
  );
};



export default App;
