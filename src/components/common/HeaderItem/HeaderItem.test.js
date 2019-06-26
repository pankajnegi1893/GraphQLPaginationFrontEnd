
import React from 'react';
import {HeaderItem} from './HeaderItem';

import renderer from 'react-test-renderer';

import { Title } from 'native-base';

it('renders without crashing', async() => {
  const rendered = await renderer.create(<HeaderItem titleText='BOOKINGS'/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('check HeaderItem Content a Title', async() => {
  const wrapper = await renderer.create(<HeaderItem titleText='BOOKINGS'/>);
  const wrapperInstance = wrapper.root;
  expect(wrapperInstance.findByType(Title).props.titleText).toBe('BOOKINGS');
});

