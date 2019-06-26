import React from 'react';
import Booking from './Booking';

import renderer from 'react-test-renderer';

import Apis from '../../../graphql/Apis';

it('renders without crashing', async() => {
  const rendered = await renderer.create(<Booking/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('test the graph API', async()  => {
    let results = await Apis.getBookingData(0);
    expect(results[0].address).toBeDefined();
    expect(results[0].booking_id).toBeDefined();
    expect(results[0].club_name).toBeDefined();
    expect(results[0].date).toBeDefined();
    expect(results[0].date_of_booking).toBeDefined();
    expect(results[0].isSuccess).toBeDefined();
    expect(results[0].package_name).toBeDefined();
    expect(results[0].total).toBeDefined();
});
