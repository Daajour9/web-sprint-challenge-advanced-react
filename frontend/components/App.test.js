import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AppFunctional from './AppFunctional';
import '@testing-library/jest-dom/extend-expect';


test('moves the box when arrow keys are pressed', () => {
  render(<AppFunctional />);

  const leftButton = document.querySelector('#left');

  fireEvent.click(leftButton);

  const steps = screen.getByText(/you moved 1 time/i);
  expect(steps).toBeInTheDocument();
});

test('email change when data input', () => {
  render(<AppFunctional />);

  const email = document.querySelector('#email');
  const submit = document.querySelector('#submit');

  fireEvent.change(email, { target: { value: "phillipsdajour64@gmail.com" } });
  fireEvent.click(submit);

  const message = document.querySelector('#message');
  expect(message).toBeInTheDocument();
});

test('reset count of moves to zero when pressed', () => {
  render(<AppFunctional />)

  const rightButton = document.querySelector('#right')
  const resetButton = document.querySelector('#reset');
  console.log(rightButton)

  fireEvent.click(rightButton)
  fireEvent.click(resetButton)
  const steps = screen.getByText(/you moved 0 times/i);
  expect(steps).toBeInTheDocument();
})