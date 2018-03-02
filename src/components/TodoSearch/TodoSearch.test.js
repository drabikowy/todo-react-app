import React from 'react';
import ReactDOM from 'react-dom';
import TodoSearch from './TodoSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
