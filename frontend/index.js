import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root.jsx';
import {configureStore} from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
