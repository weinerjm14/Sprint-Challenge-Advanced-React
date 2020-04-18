import React from "react";
import { render, findAllByText, findByTestId } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});
test("DataCardsRender", () => {
  render(<App />);
  findAllByText(/name/i);
});
test("toggle switch is visable", () => {
  render(<App />);
  findByTestId(/dark-mode-switcher/);
});
//ask about how to use Asynch
// test("data card loads", () => {
//   render(<App />);
//   const nameEl = getbyText("Name");
//   expect(nameEl).toBeVisible;
// });
