import ReactDOM from 'react-dom';
import React from 'react';

export function render() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    React.createElement(require('@tmp/router').default),
  );
}
