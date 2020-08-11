import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} p-1 m-0`}>
        <i class="fa fa-info-circle" style={{ fontSize: "1.5rem" }}></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
