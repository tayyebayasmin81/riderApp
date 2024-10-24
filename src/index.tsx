import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Provider} from 'react-redux';

import Routes from '~routes';
import {store} from '~store';

LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <Routes />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
