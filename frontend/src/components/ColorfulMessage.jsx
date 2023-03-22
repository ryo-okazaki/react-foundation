import React from "react";

export const ColorfulMessage = (props) => {
  const {
    color,
    children
  } = props

  const contentType = {
    color, // プロパティ名と値が同じ場合は省略できる
    fontSize: '18px',
  }

  return (
    <p style={contentType}>{children}</p>
  );
}