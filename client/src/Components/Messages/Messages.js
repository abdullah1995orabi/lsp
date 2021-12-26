import React from "react";
export const ErrorMessage = (props) => {
  return <div className="alert alert-danger">{props.message}</div>;
};
