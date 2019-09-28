import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Login  from './components/Login';

import store from './store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Login/>
      </div>
    </Provider>
  );
}

export default App;
