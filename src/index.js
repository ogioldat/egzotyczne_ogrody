import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Root/>, rootElement);
} else {
  ReactDOM.render(<Root/>, rootElement);
}
