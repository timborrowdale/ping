import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './css/index.css';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import App from './js/app';
import reducer from './js/reducers/index';
import states from './js/consts/app_states';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, {
  app_state: states.APP_STATE_START
});

const persistor = persistStore(store);

ReactDOM.render((
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  ), document.getElementById('root'));