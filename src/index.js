import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import * as serviceWorker from './serviceWorker';
//import AppKethopReactRedux from './Components/AppKethop.js';
import { Provider } from 'react-redux'; // add Provider from redux
//import store1 from './Components/Store'; // add store of redux

import Firebase from './Firebase/AppFirebase.js';
import storeFromFirebase from './Firebase/store';
ReactDOM.render(
  // <React.StrictMode>
  //   <AppKethopReactRedux />
  // </React.StrictMode>,

  // <Provider store={store1}>
  //     <AppKethopReactRedux />
  // </Provider>,

  <Provider store={storeFromFirebase}>
      <Firebase/>
  </Provider>,


  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
