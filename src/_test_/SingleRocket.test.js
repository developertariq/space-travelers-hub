import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configureStore';
import SingleRocket from '../components/singleRocket';
import Rockets from '../pages/Rockets';
import rocketSlice, { reserveRocket } from '../Redux/Rockets/roketsSlice';

describe('It renders', () => {
  it('SingleRocket correctly', () => {
    const tree = render(
      <Provider store={store}>
        <SingleRocket />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Rockets correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('reserveRocket', () => {
  it('should toggle the reserved property of the rocket with the specified id', () => {
    const state = [
      {
        id: '1', rocket_name: 'A', description: 'A rocket', flickr_images: 'image1.jpg', reserved: false,
      },
      {
        id: '2', rocket_name: 'B', description: 'B rocket', flickr_images: 'image1.jpg', reserved: false,
      },
      {
        id: '3', rocket_name: 'C', description: 'C rocket', flickr_images: 'image1.jpg', reserved: false,
      },
    ];

    const action = {
      type: reserveRocket.type,
      payload: '2',
    };

    const expectedState = [
      {
        id: '1', rocket_name: 'A', description: 'A rocket', flickr_images: 'image1.jpg', reserved: false,
      },
      {
        id: '2', rocket_name: 'B', description: 'B rocket', flickr_images: 'image1.jpg', reserved: true,
      },
      {
        id: '3', rocket_name: 'C', description: 'C rocket', flickr_images: 'image1.jpg', reserved: false,
      },
    ];

    const result = rocketSlice(state, action);
    expect(result).toEqual(expectedState);
  });
});
