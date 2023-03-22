import React from "react";

const ColorfulMessage = () => {
  const contentType = {
    color: 'blue',
    fontSize: '18px',
  }

  return (
    <p style={contentType}>元気ですか？</p>
  );
}

export default ColorfulMessage;