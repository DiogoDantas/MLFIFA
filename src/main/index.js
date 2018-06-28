import React from 'react';
import { logo } from '../assets/index';
import '../styles/App.css';
import SinglePage from '../views/SinglePage';
import { Provider } from 'react-redux';

import store from '../store/index';

const App = () => (
  <Provider store={store}>
    <SinglePage />
  </Provider>
);

export default App;
