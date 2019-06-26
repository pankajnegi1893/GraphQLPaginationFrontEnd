
import React from 'react';
import {ButtonStatus} from './ButtonStatus';
import {Text} from 'react-native';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ButtonStatus isSuccess={true}/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('check ButtonStatus Success Title', async() => {
    const wrapper = await renderer.create(<ButtonStatus isSuccess={true}/>);
    const wrapperInstance = wrapper.root;
    expect(wrapperInstance.findByType(Text).props.text).toBe('Success');
});

it('check ButtonStatus Cancelled Title', async() => {
    const wrapper = await renderer.create(<ButtonStatus isSuccess={false}/>);
    const wrapperInstance = wrapper.root;
    expect(wrapperInstance.findByType(Text).props.text).toBe('Cancelled');
});