import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../ui/screens/Home';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});