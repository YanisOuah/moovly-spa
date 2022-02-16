// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import PassCheck from "./components/PassCheck";
import ExtraPage from "./pages/Extra";
import HomePage from "./pages/Home";
import LogoutPage from "./pages/Logout";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PassCheck />, div);
});
it("render all page components without", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomePage />, div);
  ReactDOM.render(<ExtraPage />, div);
  ReactDOM.render(<LogoutPage />, div);
});
