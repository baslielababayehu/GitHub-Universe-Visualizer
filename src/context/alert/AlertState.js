import React, { useReducer } from "react";
import axios from "axios";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
