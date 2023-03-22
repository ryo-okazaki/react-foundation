import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentType = {
    color: 'blue',
    fontSize: '18px',
  }

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <p style={contentType}>aaa</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App;