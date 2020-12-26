import React from 'react';
import ReactDOM from 'react-dom';

// Init Redux
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';

const app = document.getElementById('root');

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, app);
