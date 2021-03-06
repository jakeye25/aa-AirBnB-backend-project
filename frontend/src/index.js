import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';

// frontend/src/index.js
// ... other imports
import { restoreCSRF, csrfFetch } from './store/csrf';

import * as sessionActions from './store/session';

  const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

//...

// const store = configureStore();

// if (process.env.NODE_ENV !== "production") {
//   window.store = store;
// }

function Root() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
      <h1> welcome to the fairbnb</h1>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
