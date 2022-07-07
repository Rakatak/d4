import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders the react app', () => {
  const component = renderer.create(
    <App />,
  );
  expect(component).toBeDefined();
});
