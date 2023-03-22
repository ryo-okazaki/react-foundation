import React from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage />
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App;