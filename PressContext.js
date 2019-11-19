import React, { useReducer, createContext, useContext, useRef } from "react";

const getData = () => {
  let pressData = [];
  fetch("../newsData.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      pressData = data;
    })
    .catch(e => console.log(e));
  return pressData;
};

const pressReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return state.filter(press => press.id === action.id);
    case "MOVE":
      return state[nextId];
    default:
      throw new Error(`unhandled action type : ${action.type}`);
  }
};

const PressStateContext = createContext();
const PressDispatchContext = createContext();
const PressNextIdContext = createContext();

export const PressProvider = ({ children }) => {
  const pressData = getData();
  const [state, dispatch] = useReducer(pressReducer, pressData);
  const nextId = useRef(1);
  return (
    <PressStateContext.Provider value={state}>
      <PressDispatchContext.Provider value={dispatch}>
        <PressNextIdContext.Provider value={nextId}>
          {children}
        </PressNextIdContext.Provider>
      </PressDispatchContext.Provider>
    </PressStateContext.Provider>
  );
};

export const usePressState = () => useContext(PressStateContext);
export const usePressDispatch = () => useContext(PressDispatchContext);
export const usePressNextId = () => useContext(PressNextIdContext);
