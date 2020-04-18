import React from "react";
import { render, getByText } from "@testing-library/react";
import App from "./App";
import DataCard from "./components/dataCard";

test("renders without crashing", () => {
  render(<App />);
});
test("navbar with text renders", () => {
  render(<App />);
  findAllByText(/name/i).toBeInTheDocument();
});

// test("data card loads", () => {
//   render(<App />);
//   const nameEl = getbyText("Name");
//   expect(nameEl).toBeVisible;
// });
