import React from "react";

const Invalid = ({ field, display }) => {
  var messageStyle;

  if (display === true) {
    messageStyle = {
      fontSize: "12px",
      color: "red",
      display: "block",
    };
  } else {
    messageStyle = {
      fontSize: "12px",
      color: "red",
      display: "none",
      textAlign: "start",
      marginBottom: "30px",
    };
  }
  const email = (
    <p style={messageStyle}>
      Enter valid <strong>email</strong>
    </p>
  );
  const number = <p style={messageStyle}>Please enter only digits.</p>;
  return (
    <>
      {field === "Email" && email}
      {field === "Number" && number}
    </>
  );
};

export default Invalid;
