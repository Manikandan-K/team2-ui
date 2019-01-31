import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LocalStorageMock from './LocalStorageMock';

it('renders without crashing', () => {
  global.localStorage = new LocalStorageMock;
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
