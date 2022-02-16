import React, { useContext } from "react";
import ReactDOM from "react-dom";
import RegisterPage from "./pages/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { AppContext, AppProvider } from "./context";
import ExtraPage from "./pages/Extra";
import LogoutPage from "./pages/Logout";
import "./index.css";

const RequireAuth = ({ children }) => {
  const { state } = useContext(AppContext);
  if (state.token === null) {
    return <Navigate to="/register" />;
  }
  return children;
};

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/extra"
            element={
              <RequireAuth>
                <ExtraPage />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/logout"
            element={
              <RequireAuth>
                <LogoutPage />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
