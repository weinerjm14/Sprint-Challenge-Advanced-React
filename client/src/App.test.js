import React from "react";
import { render, getByText } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

// test("data card loads", () => {
//   render(<App />);
//   const nameEl = getbyText("Name");
//   expect(nameEl).toBeVisible;
// });
