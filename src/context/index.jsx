import React, { useState, useCallback, createContext } from "react";
import { initialState, reducer } from "./reducer";

function useReducer(reducer, initState) {
  const [state, setState] = useState(initState);

  const dispatch = useCallback(
    (action) => {
      const nextState = reducer(state, action);
      setState(nextState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setState, state]
  );

  return [state, dispatch];
}

const AppContext = createContext({
  state: initialState,
  dispatch: (type, data) => null,
});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, initialState };
