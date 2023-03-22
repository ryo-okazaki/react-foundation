import React from "react";

const ColorfulMessage = (props) => {
  const contentType = {
    color: props.color,
    fontSize: '18px',
  }

  return (
    <p style={contentType}>{props.message}</p>
  );
}

export default ColorfulMessage;