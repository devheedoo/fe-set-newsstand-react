import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
  useRef
} from "react";

const pressReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
        showData: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null, 
        showData: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
        showData: null
      };
    case "CHANGE":
      return {
        ...state,
        showData: state.data[action.index],
      }
    default:
      throw new Error(`unhandled action type : ${action.type}`);
  }
};

const PressStateContext = createContext();
const PressDispatchContext = createContext();
const PressNextIdContext = createContext();

export const PressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pressReducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchData = () => {
    dispatch({ type: "LOADING" });
    fetch("../newsData.json")
      .then(res => res.json())
      .then(res => {
        dispatch({type: 'SUCCESS', data: res})
      })
      .catch(e => {
        dispatch({type: 'ERROR', data: e})
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextId = useRef(1);
  const { loading, data: pressData, error, showData} = state;

  if (loading) return <div>로딩중</div>
  if (error) return <div> 에러 </div>
  if (!pressData) return null;

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
