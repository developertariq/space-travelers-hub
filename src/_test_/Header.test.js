import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct header', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('renders the correct title', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    const siteTitle = getByTestId('site-title');
    expect(siteTitle).toBeInTheDocument();
  });

  test('renders the correct navbar', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    const navbar = getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });
});
