import React from 'react';
import {ListItem} from './ListItem';
import testData from '../../../graphql/testData.json';

import renderer from 'react-test-renderer';


it('renders without crashing', async() => { 
  const rendered = await renderer.create(<ListItem booking={testData[0]}/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('Test the ListItem  Default Props', () => {
    expect(ListItem.defaultProps.booking).toEqual(testData[0]);
});