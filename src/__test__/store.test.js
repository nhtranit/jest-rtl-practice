/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/index";
import Counter from "../components/Counter/index";

test("Counter component increments and decrements the count", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  const incrementButton = getByText("Increment");
  const decrementButton = getByText("Decrement");
  const countDisplay = getByText("Count: 0");

  // Click the increment button and check if count increases
  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("Count: 1");

  // Click the decrement button and check if count decreases
  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("Count: 0");
});
