import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import { getHistory, configStore } from "./containers/configureStore";
import SigninPage from './containers/SigninPage';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
       <ConnectedRouter history={getHistory()}>
      <SigninPage/>
       </ConnectedRouter>
    </Provider>
  );
}

export default App;
