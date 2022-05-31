import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../../ui/screens/Details';

test('renders correctly', () => {
  const tree = renderer.create(<Details />).toJSON();
  expect(tree).toMatchSnapshot();
});