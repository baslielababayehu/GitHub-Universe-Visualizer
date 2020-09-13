import React from "react";
import AlertContext from "../../context/alert/alertContext";
import { useContext } from "react";

export const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert !== null && (
      <div className={`alert alert-${alertContext.alert.type} p-1 m-0`}>
        <i class="fa fa-info-circle" style={{ fontSize: "1.5rem" }}></i>
        {alertContext.alert.msg}
      </div>
    )
  );
};

export default Alert;
