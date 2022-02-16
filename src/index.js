import ReactDOM from "react-dom";
import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import ExtraPage from "./pages/Extra";
import LogoutPage from "./pages/Logout";

import { AppContext, AppProvider } from "./context";

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
                <>
                  <Navigation path="home" />
                  <HomePage />
                </>
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/extra"
            element={
              <RequireAuth>
                <>
                  <Navigation path="extra" />
                  <ExtraPage />
                </>
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/logout"
            element={
              <RequireAuth>
                <>
                  <Navigation path="logout" />
                  <LogoutPage />
                </>
              </RequireAuth>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
