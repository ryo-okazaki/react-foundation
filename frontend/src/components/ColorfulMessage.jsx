import React from "react";

const ColorfulMessage = (props) => {
  const contentType = {
    color: props.color,
    fontSize: '18px',
  }

  return (
    <p style={contentType}>{props.children}</p>
  );
}

export default ColorfulMessage;