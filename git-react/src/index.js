import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContextText from './components/ContextText'
import HocComponent from './components/HocComponent';
import Composition from './components/Composition';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <ContextText /> */}
   {/* <HocComponent /> */}
   <Composition />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
