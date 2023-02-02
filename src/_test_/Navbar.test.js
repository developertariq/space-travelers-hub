import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct Rockets page', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const rocketsLink = getByText(/Rockets/i);
    fireEvent.click(rocketsLink);
    expect(window.location.pathname).toBe('/');
  });

  test('Rockets page is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const rocketsLink = getByText(/Rockets/i);
    fireEvent.click(rocketsLink);
    expect(rocketsLink.classList.contains('active')).toBe(true);
  });

  test('renders the correct Missions page', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const missionsLink = getByText(/Missions/i);
    fireEvent.click(missionsLink);
    expect(window.location.pathname).toBe('/Missions');
  });

  test('Missions page is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const missionsLink = getByText(/Missions/i);
    fireEvent.click(missionsLink);
    expect(missionsLink.classList.contains('active')).toBe(true);
  });

  test('renders the correct My Profile page', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const myProfileLink = getByText(/My Profile/i);
    fireEvent.click(myProfileLink);
    expect(window.location.pathname).toBe('/MyProfile');
  });

  test('My Profile page is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const myProfileLink = getByText(/My Profile/i);
    fireEvent.click(myProfileLink);
    expect(myProfileLink.classList.contains('active')).toBe(true);
  });
});
